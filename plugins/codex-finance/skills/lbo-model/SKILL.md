---
name: lbo-model
description: Use when users need private-equity return analysis, leverage cases, sponsor entry and exit assumptions, or an LBO sensitivity.
---

# LBO Model

## Overview

Build a sponsor-style return model that shows whether a target can support leverage and what return profile a buyer could earn under realistic operating and financing assumptions.

## Workflow

1. Frame the deal.
   Confirm entry valuation, transaction fees, financing mix, management rollover, and ownership assumptions.
2. Build sources and uses.
   Include purchase price, refinance items, fees, cash to balance sheet, debt sources, and sponsor equity.
3. Forecast operations.
   Project revenue, EBITDA, capex, cash taxes, and working capital through the hold period.
4. Build debt schedules.
   Model mandatory amortization, cash sweep behavior, interest expense, and revolver usage if needed.
5. Calculate exit value.
   Apply exit EBITDA and one or more exit multiples.
6. Calculate returns.
   Show sponsor proceeds, MOIC, and IRR.
7. Run sensitivities.
   Test entry multiple, exit multiple, leverage, and EBITDA growth.

## Minimum Deliverable

- Sources and uses
- Operating forecast through the hold period
- Debt paydown schedule
- Exit bridge
- Sponsor IRR and MOIC
- Sensitivity table

## Practical Rules

- Use leverage levels the business can plausibly support
- Separate operating improvement from multiple expansion
- Explain whether returns come mostly from deleveraging, growth, or valuation uplift
- Note covenant or refinancing pressure if cash generation is tight

## Red Flags

- Returns that only work with aggressive exit multiple expansion
- Thin cash generation relative to interest burden
- Leverage unsupported by margin stability or cyclicality
- Heavy model dependence on heroic synergy-style assumptions in a standalone LBO

## Handoff

If the user wants to compare sponsor value with public market value, pair this with `comps-analysis` or `dcf-model`.
