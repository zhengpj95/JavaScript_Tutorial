
setTimeout(() => {
	console.log(0);
}, 0);

new Promise((resolve, reject) => {
	console.log(1);
	new Promise((resolve, reject) => {
		console.log(2);
		resolve();
	}).then(() => {
		console.log(3);
	}).then(() => {
		console.log(4);
	}).then(() => {
		console.log(5);
	});
	resolve(6);
}).then((param) => {
	console.log(param);
}).then(() => {
	console.log(7);
});

/**
 * 宏队列：[0]
 * 微队列：[3, 6] => [6, 4] => [4, 7] => [7, 5]
 *
 * Promise是立马执行的，故1，2马上输出
 * 小Promise先resolve，小promise的第一个then入微队列，状态为pending，紧接后面的一个then入栈挂起
 * 3所在的then回调函数执行，后面的4的then入微队列
 * 大的Promise的第一个then执行，状态为pending，7的then入栈挂起
 * 4的then回调函数执行
 *
 * 1, 2, 3, 6, 4, 7, 5, 0
 */