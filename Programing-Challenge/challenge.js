const array = ['a', 10, 'b', 'hello', 122, 15];

const getType = (arr, type) => arr.filter((e) => typeof e === type);

const onlyLetters = getType(array, 'string');
const onlyNumbers = getType(array, 'number');
const maxNumber = onlyNumbers.sort((a,b) => a - b)[onlyNumbers.length - 1];

module.exports = { getType };