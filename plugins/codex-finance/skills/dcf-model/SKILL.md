---
name: dcf-model
description: Use when users need intrinsic valuation, discounted cash flow analysis, WACC assumptions, or a share-price range based on cash flow projections.
---

# DCF Model

## Overview

Build a discounted cash flow valuation that is explicit about assumptions and sensitive to the handful of inputs that actually drive value. The model should answer what the business is worth, why, and which assumptions matter most.

## Workflow

1. Establish the base year.
   Use the latest reliable period for revenue, margins, capex, working capital, debt, cash, and diluted shares.
2. Forecast the operating case.
   Project revenue, operating margins, taxes, D&A, capex, and working capital for a defined forecast window.
3. Build free cash flow.
   Derive unlevered FCF consistently from EBIT after tax, non-cash items, capex, and working-capital investment.
4. Estimate discount rate.
   Set WACC from cost of equity, cost of debt, target capital structure, and tax rate.
5. Calculate terminal value.
   Use perpetuity growth and, when useful, an exit multiple cross-check from `comps-analysis`.
6. Bridge from EV to equity value.
   Subtract net debt and other claims, then divide by diluted shares.
7. Run sensitivities.
   At minimum, test WACC and terminal growth. Add exit multiple sensitivity when peer data is available.

## Minimum Deliverable

- Base, upside, and downside valuation cases
- Key assumptions table
- Enterprise value to equity value bridge
- Implied value per share
- Sensitivity matrix around WACC and terminal growth

## Modeling Rules

- Keep operating assumptions internally consistent with the business model
- Use ranges for uncertain inputs instead of a fake-precise base case
- Reconcile terminal assumptions against market comps when available
- Call out when terminal value dominates the conclusion

## Red Flags

- Terminal value far above a normal share of enterprise value without a strong reason
- Forecast margins that exceed peer economics with no explanation
- WACC or terminal growth that is out of line with the company, sector, or macro regime
- Implied trading multiples that materially diverge from peers without a thesis

## Handoff

If the DCF needs a market reality check, run `comps-analysis` and compare the DCF-implied trading multiples to the peer range before presenting a conclusion.
