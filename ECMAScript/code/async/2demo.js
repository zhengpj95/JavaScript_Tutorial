async function timeOut(ms) {
	await new Promise((resolve => {
		setTimeout(resolve, ms);
	}));
}

async function func(value, ms) {
	console.log('start timeout in func...');
	await timeOut(ms);
	console.log(value);
}

func('hello...', 2000);