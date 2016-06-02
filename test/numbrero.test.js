import { expect } from 'chai';
import * as numbrero from '../src/numbrero';

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
      0, 1, 12, 123, 12345, 123456789, 123456789000, 0, 0
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
});
