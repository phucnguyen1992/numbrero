'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCurrency = formatCurrency;
exports.unformatCurrency = unformatCurrency;
exports.formatZero = formatZero;
exports.formatPercentage = formatPercentage;
exports.multiplyAndRound = multiplyAndRound;
exports.formatCurrencyWithPrefix = formatCurrencyWithPrefix;

function formatCurrency(value) {
  if (!value) return '';
  value = parseFloat(value).toFixed(2);
  return Number(value).toLocaleString();
}

function formatCurrencyWithPrefix(value) {
  if (value < 0) {
    return '-$'+formatCurrency(-value);
  } else if (value > 0) {
    return '$'+formatCurrency(value);
  } else {
    return '$0';
  }
}

function unformatCurrency(value) {
  if (!value) return null;

  let numberedValue = Number(value);
  if (numberedValue == value) {
    return numberedValue;
  } else {
    return Number(value.replace(/[^0-9\.-]+/g,""));
  }
}

function formatZero(value) {
  var string = arguments.length <= 1 || arguments[1] === undefined ? 'Nothing' : arguments[1];

  if (value === 0) return string;

  return value;
}

function formatPercentage(value) {
  if (isNaN(value) || value === '') return value;

  return value * 100 + '%';
}

function multiplyAndRound(a, b) {
  if (!a || !b) {
    return null;
  }
  return Math.round(a * b);
}
