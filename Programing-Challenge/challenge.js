const array = ['a', 10, 'b', 'hello', 122, 15];

const getType = (arr, type) => arr.filter((i) => typeof i === type);

const onlyLetters = getType(array, 'string');
const onlyNumbers = getType(array, 'number');
const maxNumber = onlyNumbers.sort((a,b) => a - b)[onlyNumbers.length - 1];

console.log(onlyLetters)