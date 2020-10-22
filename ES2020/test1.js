/**
 * 可选链操作符（Optional Chaining）
 */
let obj = {
	first: 'zheng',
	name: 'ttt',
	obj2: {
		age: 11,
		code: '1122-2211',
	},
};
console.log(obj);
/* 
obj.obj3.tt 会报错，obj.obj3不存在
obj?.obj3?.tt 不会报错，obj.obj3不存在后则不会进入下一步，直接return undefined
*/
console.log(obj?.obj3?.tt);
// console.log(obj1?.obj2?.aage); // obj1都不存在，肯定报错
console.log(obj?.obj2?.age); // ?: 简化
console.log(obj && obj.obj2 && obj.obj2.code);
