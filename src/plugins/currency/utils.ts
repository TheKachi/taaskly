import defaults from './options'

function format (input: string | any, opt = defaults) {
  if (typeof input === 'number') {
    input = input.toFixed(fixed(opt.precision))
  }
  const negative = input.includes('-') ? '-' : ''

  const numbers = onlyNumbers(input)
  const currency = numbersToCurrency(numbers, opt.precision)
  const parts = toStr(currency).split('.')
  let integer = parts[0]
  const decimal = parts[1]
  integer = addThousandSeparator(integer, opt.thousands)
  return opt.prefix + negative + joinIntegerAndDecimal(integer, decimal, opt.decimal) + opt.suffix
}

function unformat (input: string | string[], precision: any) {
  const negative = input.includes('-') ? -1 : 1
  const numbers = onlyNumbers(input)
  const currency = numbersToCurrency(numbers, precision)
  return parseFloat(currency) * negative
}

function onlyNumbers (input: any) {
  return toStr(input).replace(/\D+/g, '') || '0'
}

// Uncaught RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed (precision: any) {
  return between(0, precision, 20)
}

function between (min: number, n: number, max: number) {
  return Math.max(min, Math.min(n, max))
}

function numbersToCurrency (numbers: string, precision: number) {
  const exp = Math.pow(10, precision)
  const float = parseFloat(numbers) / exp
  return float.toFixed(fixed(precision))
}

function addThousandSeparator (integer: string, separator: any) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`)
}

function currencyToIntegerAndDecimal (float: any) {
  return toStr(float).split('.')
}

function joinIntegerAndDecimal (integer: any, decimal: any, separator: any) {
  return decimal ? integer + separator + decimal : integer
}

function toStr (value: string) {
  return value ? value.toString() : ''
}

function setCursor (el: Element | any, position: number) {
  const setSelectionRange = function () { el.setSelectionRange(position, position) }
  if (el === document.activeElement) {
    setSelectionRange()
    setTimeout(setSelectionRange, 1) // Android Fix
  }
}

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function event (name: string) {
  const evt = document.createEvent('Event')
  evt.initEvent(name, true, true)
  return evt
}

export {
  format,
  unformat,
  setCursor,
  event
}
