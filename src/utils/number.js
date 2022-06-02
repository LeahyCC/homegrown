/* eslint-disable no-undefined */
// ^ Intl.NumberFormat needs an explicit `undefined` in order to use the browser's current locale

/**
 * Clamps a number within a specified range boundary (inclusive at both ends)
 *
 * @param value The number to clamp
 * @param min The minimum value to allow
 * @param max The maximum value to allow
 */
const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

/**
 * Gets the formatter for a specific currency code
 *
 * @param currency The ISO 4217 currency code ("USD", "EUR", etc)
 */
const getCurrencyFormatter = (currency) => {
  if (currency) {
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 0,
      style: 'currency',
      currency,
    })
  }

  return new Intl.NumberFormat(undefined, { minimumFractionDigits: 0 })
}

/**
 * Formats a currency value.
 *
 * @param value The value to format
 * @param currency The ISO 4217 currency code ("USD", "EUR", etc) to use
 * @param noValueResult The value to return if the provided `value` is not a number.
 */
const formatCurrency = (value, currency, noValueResult) => {
  const formatter = getCurrencyFormatter(currency)
  return typeof value === 'number' ? formatter.format(value) : noValueResult
}

export { clamp, formatCurrency }
