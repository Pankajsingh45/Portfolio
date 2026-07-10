---
title: "Med-Predict — AI Disease Prediction System"
excerpt: "An AI-powered disease prediction system that analyzes patient symptoms and health data to predict potential diseases using machine learning models."
date: "2026-05-05"
status: "shipped"
stack: ["Python", "Machine Learning"]
cover: "/images/med-predict.svg"
repo: "https://github.com/Pankajsingh45/Med-Predict-Disease-System"
demo: ""
---

## What it does

Med-Predict takes patient-reported symptoms and health data as input and predicts the most likely disease using a trained machine learning model — the kind of triage assistant that points someone toward "this looks like it could be X" before they see a doctor, not a replacement for one.

## Why this problem

Symptom-checking is a genuinely useful application of ML: the input (symptoms) is naturally structured, there's real training data available in public medical datasets, and the output (a ranked list of likely conditions) is immediately useful even when it's not perfectly certain.

## Approach

- **Data & features** — symptoms and patient health attributes are encoded as model input features.
- **Model** — a supervised classification model trained to map symptom patterns to disease labels.
- **Interface** — a simple way for a user to enter symptoms and receive a predicted condition back.

## Responsible use

A project like this should always be framed as a decision-support tool, not a diagnosis — the README and UI should be explicit that results are informational and don't replace a real medical professional.

## What I'd improve next

Given more time, the next steps are the ones that matter most for a health-adjacent tool: reporting a confidence score alongside each prediction instead of a single label, testing the model against a held-out dataset it never trained on, and documenting where the training data comes from and its known limitations.

## Try it

Source code is on GitHub: [Pankajsingh45/Med-Predict-Disease-System](https://github.com/Pankajsingh45/Med-Predict-Disease-System).
