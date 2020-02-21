
# JavaScript的基本语法

## 1. 语句

- JavaScript 程序的执行单位为行（line），也就是一行一行地执行。一般情况下，每一行就是一个语句。
- 语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；后者则是为了得到返回值，一定会返回一个值。凡是 JavaScript 语言中预期为值的地方，都可以使用表达式。
- 语句以分号结尾，一个分号就表示一个语句结束。
- 分号前面可以没有任何内容，JavaScript 引擎将其视为空语句。

## 2. 变量

### 2.1 概念

- 变量是对“值”的具名引用。变量就是为“值”起名，然后引用这个名字，就等同于引用这个值。变量的名字就是变量名。
- JavaScript 的变量名区分大小写，A和a是两个不同的变量。
- 如果只是声明变量而没有赋值，则该变量的值是undefined。undefined是一个特殊的值，表示“无定义”。
- 如果一个变量没有声明就直接使用，JavaScript 会报错，告诉你变量未定义。
- JavaScript 是一种动态类型语言，也就是说，变量的类型没有限制，变量可以随时更改类型。

### 2.2 变量提升

- JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。
- 这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升

```javascript
console.log(a);
var a = 1;
// 上面代码首先使用console.log方法，在控制台（console）显示变量a的值。
// 这时变量a还没有声明和赋值，所以这是一种错误的做法，但是实际上不会报错。
// 因为存在变量提升，真正运行的是下面的代码。
var a;
console.log(a);
a = 1;
// 最后的结果是显示undefined，表示变量a已声明，但还未赋值。
```

## 3. 标识符

标识符（identifier）指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript 语言的标识符对大小写敏感，所以a和A是两个不同的标识符。

标识符有一套命名规则，不符合规则的就是非法标识符。
JavaScript 引擎遇到非法标识符，就会报错。

标识符命名规则：

- 第一个字符，可以是任意 Unicode 字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。
- 第一个字符，不能是数字。
- 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字0-9。

> 中文是合法的标识符，可以用作变量名。
>
> JavaScript 有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。

## 4. 注释

源码中被 JavaScript 引擎忽略的部分就叫做注释，它的作用是对代码进行解释。
JavaScript 提供两种注释的写法：一种是单行注释，用//起头；
另一种是多行注释，放在`/*`和`*/`之间。

## 5. 区块

- JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”（block）。
- 对于var命令来说，JavaScript 的区块不构成单独的作用域（scope）。
- 区块对于var命令不构成单独的作用域，与不使用区块的情况没有任何区别。
- 在 JavaScript 语言中，单独使用区块并不常见，区块往往用来构成其他更复杂的语法结构，比如for、if、while、function等。

## 6. 条件语句

- if 结构
- if...else 结构
- switch 结构
  - 需要注意的是，switch语句后面的表达式，与case语句后面的表示式比较运行结果时，采用的是严格相等运算符（===），而不是相等运算符（==），这意味着比较时不会发生类型转换。
- 三元运算符 ?:

## 7. 循环语句

- while 循环
- for 循环
- do...while 循环

```javascript
do {
  语句
} while (条件);
// 不管条件是否为真，do...while循环至少运行一次，这是这种结构最大的特点。
// 另外，while语句后面的分号注意不要省略。
```

### 7.1 break 语句和 continue 语句

- break语句和continue语句都具有跳转作用，可以让代码不按既有的顺序执行。
- break语句用于跳出代码块或循环。
- for循环也可以使用break语句跳出循环。
- continue语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。
- 如果存在多重循环，不带参数的break语句和continue语句都只针对最内层循环。

### 7.2 标签（label）

JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。
标签可以是任意的标识符，但不能是保留字，语句部分可以是任意语句。

```javascript
label:
  语句
```

标签通常与break语句和continue语句配合使用，跳出特定的循环。

```javascript
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0

// 上面代码为一个双重循环区块，break命令后面加上了top标签（注意，top不用加引号），满足条件时，直接跳出双层循环。如果break语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。
```

标签也可以用于跳出代码块。

```javascript
foo: {
  console.log(1);
  break foo;
  console.log('本行不会输出');
}
console.log(2);
// 1
// 2

// 上面代码执行到break foo，就会跳出区块。
```

continue语句也可以与标签配合使用。

```javascript
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) continue top;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2

// 上面代码中，continue命令后面有一个标签名，满足条件时，会跳过当前循环，直接进入下一轮外层循环。如果continue语句后面不使用标签，则只能进入下一轮的内层循环。
```
