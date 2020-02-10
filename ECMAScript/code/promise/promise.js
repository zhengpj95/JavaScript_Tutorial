const flag = true;

const promise = new Promise(function (resolve, reject) {
	if (flag) {
		return resolve(`value,value,value,value,value`);
	} else {
		return reject(`error,error,error,error,error`);
	}
});

/**
 * value,value,value,value,value
 * error,error,error,error,error
 * 回调函数，最后输出
 */
// promise
// 	.then(result => console.log(result))
// 	.catch(error => console.log(error));

promise.then(function (result) {
	console.log(result);
}, function (error) {
	console.log(error);
})

//Promise { 'value,value,value,value,value' }
console.log(promise);
