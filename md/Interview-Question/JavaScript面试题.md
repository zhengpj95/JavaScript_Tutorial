
# JavaScript 面试题

## Q1 : 如何准确判断this指向的是什么

[问题解析](https://juejin.im/post/5c96d0c751882511c832ff7b)

```javascript
// 此代码来源于https://juejin.im/post/5c96d0c751882511c832ff7b
var number = 5;
var obj = {
    number: 3,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        }
    })()
}
var fn1 = obj.fn1;
fn1.call(null);             // 传入5
obj.fn1();                  // 传入3
console.log(window.number); // 5
```

## Q2 : 原始类型有哪几种？ null是对象吗

6钟原始值，原始类型存储的都是值，是没有函数可以调用的。

- number
- string
- null
- undefined
- boolean
- symbol

## Q3 : 对象类型和原始类型的不同之处

在 JS 中，除了原始类型，其他的都是对象类型。
原始类型存储的是值，对象类型存储的是地址（指针）。

## Q4 : 函数参数是对象会发生什么问题

- 函数传参是传递对象指针的副本
- 到函数内部修改参数的属性，也就修改了对应内存的值

## Q5 : typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么

`typeof` 对于原始类型来说，除了 `null` 都可以显示正确的类型
`typeof` 对于对象来说，除了函数都会显示 `object`，所以说 `typeof` 并不能准确判断变量到底是什么类型

```javascript
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
```

使用 `instanceof` 来判断类型。因为内部机制是通过原型链来判断的。
但是 `instanceof` 也不是百分百可信的。

```javascript
var str = 'hello world'
str instanceof String // false

var str1 = new String('hello world')
str1 instanceof String // true
```

## Q6 : 类型转换。（笔试部分）

在 JS 中类型转换只有三种情况，分别是：

- 转换为布尔值
- 转换为数字
- 转换为字符串

![1553695878100](E:\git_project\JavaScript\md\Interview-Question\1553695878100.png)

### 转Boolean

在条件判断时，除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象。

### 对象转原始类型

对象在转换类型的时候，会调用内置的 `[[ToPrimitive]]` 函数，对于该函数来说，算法逻辑一般来说如下：

- 如果已经是原始类型了，那就不需要转换了
- 调用 x.valueOf()，如果转换为基础类型，就返回转换的值
- 调用 x.toString()，如果转换为基础类型，就返回转换的值
- 如果都没有返回原始类型，就会报错

### 四则运算符

加法运算符不同于其他几个运算符，它有以下几个特点：

- 运算中其中一方为字符串，那么就会把另一方也转换为字符串
- 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串

另外对于加法还需要注意这个表达式 'a' + + 'b'

> 'a' + + 'b' // -> "aNaN"
> +'1' // 数字1

那么对于除了加法的运算符来说，
只要其中一方是数字，那么另一方就会被转为数字

### 比较运算符

- 如果是对象，就通过 toPrimitive 转换对象
- 如果是字符串，就通过 unicode 字符索引来比较

## Q7 : 微任务与宏任务的区别

任务队列 ==> 宏任务 ==> 微任务

## Q8 : 前端开发中的 MVC/MVP/MVVM 模式

[阮一峰MVC，MVP 和 MVVM 的图示](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

MVC，MVP和MVVM都是常见的软件架构设计模式，它通过分离关注点来改进代码的组织方式。
不同的设计模式，只是为了解决一类问题而总结出的抽象方法。
一种架构模式往往使用了多种设计模式。

- C (Controller)
- P (Presenter)
- VM (View-Model)

![1553736938765](E:\git_project\JavaScript\md\Interview-Question\1553736938765.png)

![1553738320286](E:\git_project\JavaScript\md\Interview-Question\1553738320286.png)

- 视图（View）：用户界面。
- 控制器（Controller）：业务逻辑
- 模型（Model）：数据保存
- Model 层用来存储业务的数据，一旦数据发生变化，模型将通知有关的视图。
- 控制器是模型和视图之间的纽带，MVC将响应机制封装在controller对象中，当用户和你的应用产生交互时，控制器中的事件触发器就开始工作了。
- 可以明显感觉到，MVC模式的业务逻辑主要集中在Controller，而前端的View其实已经具备了独立处理用户事件的能力，当每个事件都流经Controller时，这层会变得**十分臃肿**。

![1553736959914](E:\git_project\JavaScript\md\Interview-Question\1553736959914.png)

- MVP 是MVC模式的改良
- Controller/Presenter负责业务逻辑，Model管理数据，View负责显示。
- 虽然在MVC里，View是可以直接访问Model的，但MVP中的View并不能直接使用Model，而是通过为Presenter提供接口，让Presenter去更新Model，再通过观察者模式更新View。
- 与MVC相比，MVP模式通过解耦View和Model，完全分离视图和模型使职责划分更加清晰；由于View不依赖Model，可以将View抽离出来做成组件，它只需要提供一系列接口提供给上层操作。
- Presenter作为View和Model之间的“中间人”，除了基本的业务逻辑外，还有大量代码需要对从View到Model和从Model到View的数据进行“手动同步”，这样Presenter显得很**重**，维护起来会比较困难。而且由于没有数据绑定，如果Presenter对视图渲染的需求增多，它不得不过多关注特定的视图，一旦视图需求发生改变，Presenter也需要改动。

![1553736978713](E:\git_project\JavaScript\md\Interview-Question\1553736978713.png)

- Model称为数据层，因为它仅仅关注数据本身，不关心任何行为。格式化数据由View负责
- MVVM中的View通过使用模板语法来声明式的将数据渲染进DOM，当ViewModel对Model进行更新的时候，会通过数据绑定更新到View。
- ViewModel大致上就是MVC的Controller和MVP的Presenter了，也是整个模式的重点，业务逻辑也主要集中在这里，其中的一大核心就是数据绑定。
- 整体来看，比MVC/MVP精简了很多，不仅仅简化了业务与界面的依赖，还解决了数据频繁更新（以前用jQuery操作DOM很繁琐）的问题。因为在MVVM中，View不知道Model的存在，ViewModel和Model也察觉不到View，这种低耦合模式可以使开发过程更加容易，提高应用的可重用性。

## Q9 : 什么是提升

- 有变量提升，函数提升
- 函数提升优于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
- var 存在提升，能够在声明之前使用。let，const因为存在暂时性死区，不能在声明前使用
- 存在提升这事的原因：为了解决函数间互相调用的情况。
- var 在全局作用域下声明变量会导致变量挂载到window上，其他两者不会。
- const声明的变量不能再次赋值。

## Q10 : 并发和并行的区别

- 并发是宏观概念，指在一段时间内通过任务间的切换完成了任务
- 并行是微观概念，指在CPU中同时完成了多个任务

## Q11 : 回调函数？回调地狱问题

- 回调函数有一个致命的弱点，就是容易写出回调地狱（callback hell)
  - 还不能使用 try catch 捕获错误
  - 不能直接return
- 回调地狱的根本问题就是
  - 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身
  - 嵌套函数一多，就很难处理错误。

## Q12 : Generator是什么

- 最大的特点就是可以控制函数的执行。
- 可以解决回调地狱问题

## Q13 : Promise

Promise很好地解决了回调地狱的问题。

Promise有三种状态：

- 等待中（pending）
- 完成了（resolved）
- 拒绝了（rejected）

一旦从等待状态变成为其他状态就永远不能更改状态了。
在构造Promise的时候，构造函数内部的代码是立即执行的。

Promise实现了链式调用，也就是说每次调用then之后返回的都是一个Promise，并且是一个全新的Promise，原因是状态不可变。

## Q14 : async及await的特点？优缺点？await原理

1. 一个函数如果加上async，那么该函数就会返回一个Promise
2. async就是将函数返回值使用Promise.resolve()包裹了下，和then中处理返回值一样，并且await只能配套async使用
3. async和await可以说是异步终极解决方案了。
4. 缺点：因为await将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了await会导致性能上的降低。

## Q15 :  对象

面向对象的三大基本特性：封装、继承、多态
构造函数：构造对象时初始化对象，即为对象成员变量赋初始值。
继承：用一个类来定义另一个类。基类，派生类。

## Q16 : 判断类型

typeof：
    可以判断：undefined/数值/字符串/布尔值/function
    不能判断：null与object  object与array

instanceof：
    判断对象的具体类型

===：
    可以判断：undefined, null

## Q17 : undefined和null的区别

undefined：定义未赋值
null：定义并赋值了，只是值为null

什么时候给变量赋值为null呢？
    有时候初始值为null，表明以后将要赋值为对象。
    后期赋值为null，表明释放空间，让垃圾回收机制处理。

严格区别变量类型与数据类型
    数据的类型
        基本类型 和 对象类型
    变量的类型
        基本类型 和 引用类型

## Q18 : IIFE(Immediately-Invoked Function Expression)

隐藏实现
不会污染外部（全局）命名空间
用它来编码js模块

## Q19 : 变量提升与函数提升

先执行变量提升，后执行函数提升

提升就相当于放到执行上下文中去了。

执行上下文：全局执行上下文，函数执行上下文

## Q20 : 块作用域

JavaScript没有块作用域，ES6后有了。

## Q21 : 作用域与执行上下文

- 全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义时就已经确定了，而不是在函数调用时
- 全局执行上下文环境是在全局作用域确定之后，js代码马上执行之前创建
- 函数执行上下文是在调用函数时，函数体代码执行之前创建

- 作用域是静态的，只要函数定义好了就一直存在，且不会再变化
- 执行上下文是动态的，调用函数时创建，函数调用结束时就会自动释放

## Q22

## Q23
