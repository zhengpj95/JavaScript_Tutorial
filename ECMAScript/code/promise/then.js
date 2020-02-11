function func() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve();
		}, 1000);
	})
}

func()
	.then(() => {
		console.log(11);
	})
	.then(() => {
		console.log(22);
	})
	.then(() => {
		return func();
	})
	.then(() => {
		console.log(33);
	})
	.catch(() => {
		console.log('fail...');
	})
	.finally(()=>{
		console.log('finally...');
	})
