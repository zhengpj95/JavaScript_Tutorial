
# Objcet 对象

## 1. 概述

JavaScript 的所有其他对象都继承自 Object 对象，即那些对象都是 Object 的实例。
Object 对象的原生方法分为两类：**Object 本身的方法**和 **Object 的实例方法**。

（1）Object 对象本身的方法

所谓的“本身的方法”就是直接定义在 Object 对象的方法。

（2）Object 的实例方法

所谓实例方法就是定义在 Object 原型对象 Object.prototype 上的方法。
它可以被 Object 实例直接使用。
凡是定义在Object.prototype对象上面的属性和方法，将被所有实例对象共享就可以了。

## 2. Object()

Object本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。

如果参数为空（或者为undefined和null），Object()返回一个空对象。

```javascript
var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);

obj instanceof Object // true
```

如果参数是原始类型的值，Object方法将其转为对应的包装对象的实例

```javascript
// Object函数的参数是各种原始类型的值，转换成对象就是原始类型值对应的包装对象。
var obj = Object(1);
obj instanceof Object // true
obj instanceof Number // true

var obj = Object('foo');
obj instanceof Object // true
obj instanceof String // true

var obj = Object(true);
obj instanceof Object // true
obj instanceof Boolean // true
```

如果Object方法的参数是一个对象，它总是返回该对象，即不用转换。

```javascript
var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr // true

var value = {};
var obj = Object(value) // 返回原对象
obj === value // true

var fn = function () {};
var obj = Object(fn); // 返回原函数
obj === fn // true
```

利用这一点，可以写一个判断变量是否为对象的函数。

```javascript
// 判断变量是否为对象
function isObject(value) {
  return value === Object(value);
}
```

## 3. Object构造函数

Object不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用new命令。
Object构造函数的首要用途，是直接通过它来生成新对象。
> var obj = new Object();
> 注意，通过var obj = new Object()的写法生成新对象，与字面量的写法var obj = {}是等价的。或者说，后者只是前者的一种简便写法。

Object构造函数的用法与工具方法很相似，几乎一模一样。使用时，可以接受一个参数，如果该参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应的包装对象

虽然用法相似，但是Object(value)与new Object(value)两者的语义是不同的，Object(value)表示将value转成一个对象，new Object(value)则表示新生成一个对象，它的值是value。

## 4. Object的静态方法

所谓“静态方法”，是指部署在Object对象自身的方法。

### Object.keys() 与 Object.getOwnPropertyNames()

遍历对象的属性
Object.keys方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名。
Object.getOwnPropertyNames方法与Object.keys类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的所有属性名。

```javascript
var obj = {
  p1: 123,
  p2: 456
};

Object.keys(obj) // ["p1", "p2"]

// Object.keys方法只返回可枚举的属性
var a = ['Hello', 'World'];

Object.keys(a) // ["0", "1"]
Object.getOwnPropertyNames(a) // ["0", "1", "length"]
```

## 5. Object 的实例方法

除了静态方法，还有不少方法定义在Object.prototype对象。它们称为实例方法，所有Object的实例对象都继承了这些方法。

Object实例对象的方法，主要有以下六个：

- Object.prototype.valueOf()：返回当前对象对应的值。
- Object.prototype.toString()：返回当前对象对应的字符串形式。
- Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。
- Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
- Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。
- Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举。

### 5.1 Objcet.prototype.valueOf()

返回一个对象的“值”，默认情况下返回对象本身。
JavaScript 自动类型转换时会默认调用这个方法

### 5.2 Object.prototype.toString()

返回一个对象的字符串形式，默认情况下返回类型字符串。
当对象用于字符串加法时，会自动调用toString方法。
数组、字符串、函数、Date 对象都分别部署了自定义的toString方法，覆盖了Object.prototype.toString方法。
由于实例对象可能会自定义toString方法，覆盖掉Object.prototype.toString方法，所以为了得到类型字符串，最好直接使用Object.prototype.toString方法。

toString() 的应用：判断数据类型
不同数据类型的Object.prototype.toString方法返回值如下：
数值：返回[object Number]。
字符串：返回[object String]。
布尔值：返回[object Boolean]。
undefined：返回[object Undefined]。
null：返回[object Null]。
数组：返回[object Array]。
arguments 对象：返回[object Arguments]。
函数：返回[object Function]。
Error 对象：返回[object Error]。
Date 对象：返回[object Date]。
RegExp 对象：返回[object RegExp]。
其他对象：返回[object Object]。

## 属性描述对象

[属性描述对象](https://wangdoc.com/javascript/stdlib/attributes.html)

其中介绍了对象的可读可写、可枚举、可配置等属性
还有控制对象的状态，如对象的冻结属性，是否冻结属性。
