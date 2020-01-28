/**
 * var newArray = arr.flat([depth]);
 * depth: optional, default 1
 * return newArray
 */

let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, [11, 12, 13]]]];

console.log(arr);

console.log(arr.flat());

console.log(arr.flat(2));

console.log(arr.flat(Infinity));

console.log('======只对二维数组有效=======');

console.log([].concat(...arr));

console.log(arr.reduce((acc, val) => acc.concat(val), []));