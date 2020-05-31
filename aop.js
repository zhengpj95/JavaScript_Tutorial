/**
 * AOP（面向切面编程），主要作用就是把一些跟核心逻辑模块无关的功能抽离处理。
 * 这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。
 */
Function.prototype.before = function (fn) {
	let _self = this;
	return function () { // 返回包含了原函数和新函数的 “代理” 函数
		fn.apply(this, arguments);//执行新函数，修正了this
		return _self.apply(this, arguments);//执行原函数
	}
}

Function.prototype.after = function (fn) {
	let _self = this;
	return function () {
		let ret = _self.apply(this, arguments);
		fn.apply(this, arguments);
		return ret;
	}
}

let func = function () {
	console.log(222);
}

func = func.before(() => {
	console.log(111);
}).after(() => {
	console.log(333);
});

func();