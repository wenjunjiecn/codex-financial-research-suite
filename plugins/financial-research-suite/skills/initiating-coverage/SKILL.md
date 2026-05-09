---
name: initiating-coverage
description: Use when creating a first-time equity research initiation, starting coverage on a company, or breaking a large initiation workflow into staged research, modeling, valuation, and writing tasks.
---

# Initiating Coverage

## Overview

Build a first-time coverage workflow in stages. This skill is for substantial initiation work and should be handled as a sequence of distinct tasks rather than a single burst of output.

## Execution Model

Work in one stage at a time. Do not assume the full pipeline should run end to end unless the user explicitly wants that level of output and the needed inputs exist.

## Stages

1. Company research
   Business model, management, industry structure, competitive position, and major risks.
2. Financial model
   Historical build, operating forecast, and core assumptions.
3. Valuation
   DCF, comps, and price-target framing.
4. Charts and exhibits
   The figures that explain the story, not chart spam.
5. Report assembly
   Combine the research, model conclusions, and exhibits into a coherent initiation product.

## Minimum Deliverable Per Stage

- Research stage: company and industry brief
- Model stage: forecast framework and assumptions
- Valuation stage: fair value range and target logic
- Charts stage: curated exhibits tied to the thesis
- Report stage: initiation note with thesis, numbers, risks, and catalysts

## Working Rules

- Verify prerequisites before each stage
- Keep stage outputs reusable by later stages
- Prefer progressive review over producing a giant report too early
- Tailor scope to the audience: full initiation note, internal primer, or condensed memo

## Red Flags

- Starting valuation before the operating model is stable
- Producing a long report before the core thesis is sharp
- Treating the initiation as generic background instead of a differentiated investment case

## Handoff

- Use `sector-overview` for the industry foundation
- Use `three-statement-model`, `dcf-model`, and `comps-analysis` for the analytical build
- Use `thesis-tracker` after initiation if the name moves to active coverage
