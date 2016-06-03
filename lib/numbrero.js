'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCurrency = formatCurrency;
exports.unformatCurrency = unformatCurrency;
exports.formatZero = formatZero;
exports.formatPercentage = formatPercentage;
exports.multiplyAndRound = multiplyAndRound;
function formatCurrency(value) {
  if (!value) return '';

  var formattedValue = String(value).replace(/\D/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return formattedValue;
}

function unformatCurrency(value) {
  if (!value) return 0;

  var unformattedValue = value.replace(/\D/g, '');
  var unformattedNumber = Number(unformattedValue);

  return unformattedNumber;
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
  return Math.round(a * b);
}