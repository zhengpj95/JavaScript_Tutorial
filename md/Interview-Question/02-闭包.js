
// 下面的代码打印什么内容，为什么？
// 函数闭包

var b = 10;
(function b() {
	b = 20;
	console.log(b); // 输出 Function b
})();

// 简单改造上面的代码，使之分别打印 10 和 20。
var b = 10;
(function () {
	var b = 20;
	console.log(window.b)	// 输出 10
	console.log(b); // 输出 20
})();