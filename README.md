# Discount Calculator

Calculate final prices after one or two stacked percentage discounts, with quick-preset buttons and savings amount display, entirely in the browser.

**Live Demo:** https://file-converter-free.com/en/calculators/discount-calculator

## How It Works

The primary discounted price is `price * (1 - pct / 100)`. If a second discount percentage is provided, it is applied to the already-discounted price: `finalPrice = discountedPrice * (1 - pct2 / 100)`. Savings amount is `originalPrice - finalPrice`. Percentage saved across both discounts is `(savings / originalPrice) * 100`. Quick-preset buttons (e.g. 5%, 10%, 15%, 20%, 25%, 50%) populate the discount field and trigger recalculation immediately, providing one-click access to common discount values without manual entry.

## Features

- Single discount: `price * (1 - pct/100)`
- Optional second discount applied to already-discounted price (stacked)
- Savings amount and effective total discount percentage
- Quick-preset buttons for 5%, 10%, 15%, 20%, 25%, 50%
- Real-time recalculation on input change

## Browser APIs Used

- (No external APIs — pure DOM arithmetic)

## Code Structure

| File | Description |
|------|-------------|
| `discount-calculator.js` | `price*(1-pct/100)` single discount, optional stacked second discount, savings amount, quick-preset button handlers |

## Usage

| Element ID / Selector | Purpose |
|----------------------|---------|
| `#dscPrice` | Original price input |
| `#dscPct` | First discount percentage |
| `#dscPct2` | Second discount percentage (optional) |
| `#dscCalc` | Calculate button |
| `#dscFinal` | Final price display |
| `#dscSavings` | Amount saved display |
| `#dscEffective` | Effective total discount percentage |
| `.dsc-preset` | Quick-preset discount buttons |

## License

MIT
