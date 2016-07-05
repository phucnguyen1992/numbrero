import { expect } from 'chai';
import * as numbrero from '../lib/numbrero';

describe('numbrero', () => {
  describe('formatCurrency', () => {
    const beforeArray = [
      '0', '1', '12', '123', '12345', '123456789', '12345d6789000', 1234,
      'abc1', '123b', '1234b', 'a1234', undefined, ''
    ];
    const afterArray = [
      '0', '1', '12', '123', '12,345', '123,456,789', '123,456,789,000', '1,234',
      '1', '123', '1,234', '1,234', '', ''
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
      '0', '1', '12', '123', '12,345', '123,456,789', '123,456,789,000', undefined , ''
    ];
    const afterArray = [
      0, 1, 12, 123, 12345, 123456789, 123456789000, null, null
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
