/**
 * 空位合并操作符（Nullish coalescing Operator）
 */

//  使用 ?: 或者 || 时，0, null, undefined, '' 都会被忽略
let a = 0; //0, null, undefined, ''
console.log(a ? a : 11);
console.log(a || 22);

// ?? 不会忽略 0, ''
// 相当于 a !== null && a !== undefined ? a : 33
console.log('---', a ?? 33);
