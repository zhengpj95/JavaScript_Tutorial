/**
 * executes a reducer function on each element of the array, resulting in a single output value
 */
let arr = [1, 2, 3, 4, 5];

let reducer = (previousValue, currentValue) => {
	console.log(previousValue, '----', currentValue);
	return previousValue + currentValue;
}

/**
 * reduce()
 * 第一个参数是函数，第二个参数是初始值，默认是0
 * from left-to-right
 */
let newVal = arr.reduce(reducer);
let newVal2 = arr.reduce(reducer, 1000);
console.log(newVal, newVal2);

console.log('=================================');

/**
 * reduceRight()
 * 第一个参数是函数，第二个参数是初始值，默认是0
 * from right-to-left
 */
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
	(accumulator, currentValue) => {
		console.log(accumulator, '----', currentValue);
		return accumulator.concat(currentValue)
	}
);

console.log(array1);
