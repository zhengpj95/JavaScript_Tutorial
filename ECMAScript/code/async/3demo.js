async function func() {
	return 'async...';
}

console.log(func());//async函数返回的是一个Promise对象

func()
	.then(result => console.log(result))
	.catch(error => console.log(error));