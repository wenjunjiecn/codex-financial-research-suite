---
name: three-statement-model
description: Use when users need an integrated income statement, balance sheet, and cash flow model tied together over a forecast period.
---

# Three Statement Model

## Overview

Build an integrated forecast where the income statement, balance sheet, and cash flow statement stay linked and balanced. The output should support downstream valuation, planning, or financing analysis.

## Workflow

1. Set the historical base.
   Gather a clean historical period with enough detail to identify growth, margin, working-capital, and capex drivers.
2. Define forecast drivers.
   Separate revenue drivers, margin assumptions, capex, depreciation, working capital, debt, and taxes.
3. Project the income statement.
   Forecast revenue through net income with explicit operating assumptions.
4. Project the balance sheet.
   Tie receivables, inventory, payables, PP&E, debt, and equity to the operating forecast.
5. Build the cash flow statement.
   Reconcile net income to operating cash flow, investing cash flow, and financing cash flow.
6. Check model integrity.
   Ensure the balance sheet balances and cash roll-forward works every period.

## Minimum Deliverable

- Historical and forecast statements
- Driver assumptions table
- Balance check
- Cash roll-forward
- Short note on the main operational drivers

## Modeling Rules

- Forecast from business drivers, not from arbitrary plugs
- Make working-capital assumptions explicit
- Tie debt and interest consistently
- Keep circularity controlled and documented if it exists

## Red Flags

- Balance sheet does not balance
- Cash becomes the plug without explanation
- Working-capital swings are disconnected from growth
- Depreciation and capex relationships are inconsistent

## Handoff

Use this skill before `dcf-model` when the user needs a full forecast engine rather than a lighter valuation build.
