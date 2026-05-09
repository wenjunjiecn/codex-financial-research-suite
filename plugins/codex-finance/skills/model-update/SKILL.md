---
name: model-update
description: Use when new earnings, guidance, macro inputs, or company events require refreshing financial forecasts, valuation, or target price assumptions.
---

# Model Update

## Overview

Refresh a model after something changed. The goal is not just plugging numbers, but explaining which assumptions moved, why they moved, and what that does to value.

## Workflow

1. Identify the trigger.
   Determine whether the update comes from earnings, guidance, macro, capital structure, or a strategic event.
2. Plug actuals or revised inputs.
   Update the latest period and reconcile to reported figures before changing forward assumptions.
3. Revise the forecast.
   Adjust growth, margins, capex, working capital, tax, or share count where the new information genuinely changes the outlook.
4. Recalculate valuation.
   Refresh DCF, trading-multiple, or target-price logic as applicable.
5. Summarize the delta.
   Show old versus new estimates and explain the few changes that actually matter.

## Minimum Deliverable

- Table of actual versus prior estimate for the changed period
- Table of old versus new forward estimates
- Explanation of the main assumption revisions
- Updated valuation or target price
- Short judgment on whether the change is thesis-relevant or noise

## Core Principle

Separate mechanical updates from analytical judgment. Not every reported variance should flow forward.

## Red Flags

- Rolling a one-time item into normalized estimates
- Changing too many assumptions without tying them to the new information
- Forgetting share count, debt, or cash effects on per-share value
- Updating the model without checking how revised numbers compare with consensus

## Handoff

Use `dcf-model` or `comps-analysis` if the valuation framework itself needs to be rebuilt rather than simply refreshed.
