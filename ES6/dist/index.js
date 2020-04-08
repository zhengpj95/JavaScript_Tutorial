'use strict';

// // let a = 'aaa';
// // console.log(a);

// // // var定义的是全局变量
// // var b = 'b';
// // {
// // 	var b = 'bbb';
// // }
// // console.log(b);

// // // let 定义的是局部变量
// // let c = 'c';
// // { let c = 'ccc' };
// // console.log(c);

// // const d = 'dot';
// // console.log(d);

// // let str = 'today';
// // console.log(str.repeat(3))

// console.log(`================================`);

// let arr = ['vue', 'typescript', 'javascript', 'nodejs']

// console.log(arr.join(''));
// console.log(arr.toString())

// // for (let item of arr) {
// // 	console.log(item);
// // }

// // for (let [index, val] of arr.entries()) {
// // 	console.log(index + ':' + val);
// // }

// // let list = arr.entries();
// // console.log(list);
// // console.log(list.next().value);
// // console.log(list.next().value);
// // console.log(list.next().value);

// console.log(`================================`);

// // 'use strict' 在ES6中我们可以写在函数体中，相当于针对函数来使用。
// function add(a, b) {
// 	// 使用了严格模式，参数不可以有默认值，否则报错
// 	'use strict'
// 	if (a == 0) {
// 		throw new Error('This is error.');
// 	}
// 	return a + b;
// }
// console.log(add(1, 11));

// var a = new String;
// var b = new Number;
// var c = new Boolean;
// var d = new Array;
// var e = new Object;
// var f = Symbol();
// console.log(typeof (f));

// var jspang = Symbol();
// var obj = {
// 	[jspang]: '技术胖'
// }
// console.log(obj[jspang]);
// obj[jspang] = 'web';
// console.log(obj[jspang]);

// let obj1 = { name: 'jspang', skill: 'web' };
// let age = Symbol();
// obj1[age] = 18;
// for (let item in obj1) {
// 	console.log(obj1[item]);
// }
// console.log(obj1);
// console.log(obj1[age]);

var setArr = new Set(['zheng', 'git', 'svn', 'zheng']);
setArr.add('front end');
console.log(setArr);
setArr.clear();
console.log(setArr);
console.log(setArr.has('zheng'));
