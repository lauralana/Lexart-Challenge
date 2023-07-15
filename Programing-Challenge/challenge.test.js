const { getType } = require('./challenge.js');

const array = ['a', 10, 'b', 'hello', 122, 15];

describe('Test getType function', () => {
  test('should return an array with only strings', () => {
    const onlyLetters = getType(array, 'string');
        expect(onlyLetters).toEqual(['a', 'b', 'hello']);
      });
    
  test('should return an array with only numbers', () => {
    const onlyNumbers = getType(array, 'number');
        expect(onlyNumbers).toEqual([10, 122, 15]);
      });
    
  test('should return the maximum number', () => {
    const onlyNumbers = getType(array, 'number');
    const maxNumber = onlyNumbers.sort((a,b) => a - b)[onlyNumbers.length - 1];
    expect(maxNumber).toBe(122);
      });
});