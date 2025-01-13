const numbers = [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1,5, 8, 7, 4];
const uniqueNumbers = [...new Set(numbers)];

console.log("Array sin duplicados:", uniqueNumbers);