function sleep() {
	setTimeout(
		() => {
			console.log('55 sleep 5 seconds...');
		},
		5000);
}

/**
 * async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
 * 当函数执行的时候，一旦遇到 await 就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
 */
async function func() {
	console.log('22');
	let str = await sleep();
	console.log('44');
}

console.log('11');
func();
console.log('33');
