import { expect } from 'chai';
import * as numbrero from '../lib/numbrero';

describe('numbrero', () => {

  describe('formatCurrencyWithPrefix', () => {
    const beforeArray = [
      '', NaN, undefined, 12345678, 123.245, '-12345678.00'
    ];
    const afterArray = [
      '$0', '$0', '$0', '$12,345,678', '$123.25', '-$12,345,678'
    ];

    beforeArray.forEach((testValue, i) => {
      it(`returns a formatted value with $ prefix for ${testValue}`, () => {
        let result = numbrero.formatCurrencyWithPrefix(testValue);
        expect(result).to.equal(afterArray[i]);
      });
    });
  });


  describe('formatCurrency', () => {
    const beforeArray = [
      '0', '1', '12', '123', '12345', '123456789', '12345.678', 1234, ''
    ];
    const afterArray = [
      '0', '1', '12', '123', '12,345', '123,456,789', '12,345.68', '1,234', ''
    ];

    beforeArray.forEach((testValue, i) => {
      it(`returns a formatted value for ${testValue}`, () => {
        let result = numbrero.formatCurrency(testValue);
        expect(result).to.equal(afterArray[i]);
      });
    });
  });
  describe('unformatCurrency', () => {
    const beforeArray = [
      '0', '1', '12', '123', '12,345', '123,456,789', '123,456,789,000', undefined ,
      '', 2345, 24222.342, '342342.324', '234,333.2333', '3423hehe234,3333.222', '-233.222'
    ];
    const afterArray = [
      0, 1, 12, 123, 12345, 123456789, 123456789000, null, null, 2345, 24222.342,
      342342.324, 234333.2333, 34232343333.222, -233.222
    ];

    beforeArray.forEach((testValue, i) => {
      it(`returns an unformatted value for ${testValue}`, () => {
        let result = numbrero.unformatCurrency(testValue);
        expect(result).to.equal(afterArray[i]);
      });
    });
  });
  describe('formatZero', () => {
    const beforeArray = [
      0, 0.1, 1234, undefined, 'NaN', ''
    ];
    const afterArray = [
      'Nothing', 0.1, 1234, undefined, 'NaN', ''
    ];

    beforeArray.forEach((testValue, i) => {
      it(`returns a formatted value for ${testValue}`, () => {
        let result = numbrero.formatZero(testValue);
        expect(result).to.equal(afterArray[i]);
      });
    });
    it('returns a formatted value for 0 using the provided string', () => {
      let result = numbrero.formatZero(0, 'Foobar');
      expect(result).to.equal('Foobar');
    });
  });
  describe('formatPercentage', () => {
    const beforeArray = [
      0, 0.1, 0.12, 0.123, 0.12345, 0.123456789, 1.234523913, 1234, undefined, 'NaN', '12', ''
    ];
    const afterArray = [
      '0%', '10%', '12%', '12.3%', '12.345%', '12.3456789%', '123.4523913%', '123400%', undefined, 'NaN', '1200%', ''
    ];

    beforeArray.forEach((testValue, i) => {
      it(`returns a formatted value for ${testValue}`, () => {
        let result = numbrero.formatPercentage(testValue);
        expect(result).to.equal(afterArray[i]);
      });
    });
  });

  describe('multiplyAndRound', () => {
    const beforeArray = [
      {a: null, b: 3},
      {a: 3, b: ''},
      {a: 2, b: 5},
      {a: 0.2, b: 1},
      {a: 2.5, b: 2.5}
    ];
    const afterArray = [
      null, null, 10, 0, 6
    ];

    beforeArray.forEach((testValue, i) => {
      it(`returns a multiplied value for ${testValue}`, () => {
        let result = numbrero.multiplyAndRound(testValue.a, testValue.b);
        expect(result).to.equal(afterArray[i]);
      });
    });
  });
});
