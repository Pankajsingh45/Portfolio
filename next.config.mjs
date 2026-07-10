/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a minimal, self-contained server (.next/standalone) with only
  // the production dependencies actually used at runtime. This is what
  // lets the Docker image stay small — see Dockerfile.
  output: "standalone",

  images: {
    // This project's cover images are local placeholder SVGs; allow next/image
    // to serve them safely (sandboxed, no script execution) rather than
    // switching every cover to PNG/JPG just to satisfy the default.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
    // Add remote domains here if post covers are ever hosted externally, e.g.:
    // remotePatterns: [{ protocol: "https", hostname: "images.example.com" }],
  },
};

export default nextConfig;
