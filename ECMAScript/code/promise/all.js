const p1 = new Promise((resolve, reject) => {
	return resolve('promise 1...');
	// return reject('error 1...');
})
	.then(result => result);

const p2 = new Promise((resolve, reject) => {
	// return resolve('promise 2...');
	return reject('error 2...');
	// throw new Error('error 2...');
})
	.then(result => result)
	.catch(error => error);

/**
 * p1,p2都为fulfilled时，p1,p2的返回值组成一个数组，传递给p的回调函数
 * p1,p2任一个为rejected时，第一个被rejected的实例的返回值，传递给p的回调函数
 */
const p = Promise.all([p1, p2]);

/**
 * 如果p1,p2有自己的catch方法，则其抛出的错误就会被自己的catch方法捕获，
 * 然后catch方法返回的是一个新的 Promise 实例。p1或p2指向的实际上就是这个实例。
 * 该实例执行完catch方法后，也会变成resolved，
 * 最后导致Promise.all()方法参数里面的两个实例都是resolved，
 * 因此会调用Promise.all的then方法指定的回调函数，而不会调用catch方法指定的回调函数。 
 * 如果p1,p2都没有自己的catch方法，就会调用Promise.all()的catch方法。
 */
p
	.then(result => console.log(result))
	.catch(error => console.log(error));

setTimeout(() => console.log('Promise.all() --- ', p), 2000)