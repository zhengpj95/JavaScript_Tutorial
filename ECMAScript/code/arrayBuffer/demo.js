/**
 * ArrayBuffer对象不提供任何直接读写内存的方法，
 * 只允许在其上方建立视图，然后通过视图读写。
 */
const buffer = new ArrayBuffer(32);
console.log(buffer);

const dataView = new DataView(buffer);
console.log(dataView.getUint8(0));// 0
