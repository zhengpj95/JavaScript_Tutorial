

// 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。
/*
for (var i = 0; i < 10; i++) {
	// 异步函数，如用var，最后输出的全是10
	setTimeout( () => {
		console.log(i);
	}, 1000)
}*/

// 方法一：let 替代 var
for (let i = 0; i < 10; i++) {
	// 异步函数，如用var，最后输出的全是10
	setTimeout( () => {
		console.log(i);
	}, 1000)
}

// 方法二：回调函数
function a(callback) {
	for (var i = 0; i < 10; i++) {
		// 异步函数，如用var，最后输出的全是10
		callback(i);
	}
}

a(function (i) {
	setTimeout( () => {
		console.log(i);
	}, 1000)
})

