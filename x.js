const { chunk } = require("@blue/lodash");
const array = [1, 2, 3, 4, 5];
const chunkedArray = chunk(array, 2);
console.log(chunkedArray);
