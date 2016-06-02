export function formatCurrency(value) {
  if (!value) return '';

  let formattedValue = String(value)
                        .replace(/\D/g, '')
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return formattedValue;
}

export function unformatCurrency(value) {
  if (!value) return 0;

  let unformattedValue = value.replace(/\D/g, '');
  let unformattedNumber = Number(unformattedValue);

  return unformattedNumber;
}

export function formatZero(value, string='Nothing') {
  if (value === 0) return string;

  return value;
}

export function formatPercentage(value) {
  if (isNaN(value) || value === '') return value;

  return `${value * 100}%`;
}

export function multiplyAndRound(a, b) {
  return Math.round(a * b);
}
