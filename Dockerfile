# syntax=docker/dockerfile:1

##### 1. deps — install dependencies only, cached until package*.json changes
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

##### 2. builder — build the app with standalone output
FROM node:20-alpine AS builder
WORKDIR /app

# Build-time public config. NEXT_PUBLIC_* values are inlined into the
# client bundle during `next build`, so they must be provided here, e.g.:
#   docker build --build-arg NEXT_PUBLIC_SITE_URL=https://example.com .
ARG NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

##### 3. runner — minimal production image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Run as a non-root user rather than the default root inside the container.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# `output: "standalone"` (see next.config.mjs) produces a pruned server
# bundle at .next/standalone containing only the runtime dependencies
# actually used — no need to copy the full node_modules into this stage.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
