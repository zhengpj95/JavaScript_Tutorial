# JSON对象

## 1. JSON格式

每个 JSON 对象就是一个值，可能是一个数组或对象，也可能是一个原始类型的值。总之，只能是一个值，不能是两个或更多的值。

JSON 对值的类型和格式有严格的规定。

> 1. 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
> 2. 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和`null`（不能使用`NaN`, `Infinity`, `-Infinity`和`undefined`）。
> 3. 字符串必须使用双引号表示，不能使用单引号。
> 4. 对象的键名必须放在双引号里面。
> 5. 数组或对象最后一个成员的后面，不能加逗号。
> 6. 注意，`null`、空数组和空对象都是合法的 JSON 值。

## 2. JSON对象

`JSON`对象是 JavaScript 的原生对象，用来处理 JSON 格式数据。它有两个静态方法：`JSON.stringify()`和`JSON.parse()`。

## 3. JSON.stringify()

### 3.1 基本用法

`JSON.stringify`方法用于将一个值转为 JSON 字符串。该字符串符合 JSON 格式，并且可以被`JSON.parse`方法还原。

注意，对于原始类型的字符串，转换结果会带双引号。

```javascript
JSON.stringify('foo') === "foo" // false
JSON.stringify('foo') === "\"foo\"" // true
```

如果对象的属性是`undefined`、函数或 XML 对象，该属性会被`JSON.stringify`过滤。

如果数组的成员是`undefined`、函数或 XML 对象，则这些值被转成`null`。

正则对象会被转成空对象。

`JSON.stringify`方法会忽略对象的不可遍历的属性。

### 3.2 第二个参数

`JSON.stringify`方法还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性。

```javascript
var obj = {
  'prop1': 'value1',
  'prop2': 'value2',
  'prop3': 'value3'
};

var selectedProperties = ['prop1', 'prop2'];

JSON.stringify(obj, selectedProperties)
// "{"prop1":"value1","prop2":"value2"}"
// 上面代码中，JSON.stringify方法的第二个参数指定，只转prop1和prop2两个属性。
// 这个类似白名单的数组，只对对象的属性有效，对数组无效。
```

第二个参数还可以是一个函数，用来更改`JSON.stringify`的返回值。

### 3.3 第三个参数

`JSON.stringify`还可以接受第三个参数，用于增加返回的 JSON 字符串的可读性。如果是数字，表示每个属性前面添加的空格（最多不超过10个）；如果是字符串（不超过10个字符），则该字符串会添加在每行前面。

```javascript
JSON.stringify({ p1: 1, p2: 2 }, null, 2);
/*
"{
  "p1": 1,
  "p2": 2
}"
*/

JSON.stringify({ p1:1, p2:2 }, null, '|-');
/*
"{
|-"p1": 1,
|-"p2": 2
}"
*/
```

### 3.4 参数对象的 toJSON 方法

如果参数对象有自定义的`toJSON`方法，那么`JSON.stringify`会使用这个方法的返回值作为参数，而忽略原对象的其他属性。

下面是一个普通的对象。

```javascript
var user = {
  firstName: '三',
  lastName: '张',

  get fullName(){
    return this.lastName + this.firstName;
  }
};

JSON.stringify(user)
// "{"firstName":"三","lastName":"张","fullName":"张三"}"
```

现在，为这个对象加上`toJSON`方法。

```javascript
var user = {
  firstName: '三',
  lastName: '张',

  get fullName(){
    return this.lastName + this.firstName;
  },

  toJSON: function () {
    return {
      name: this.lastName + this.firstName
    };
  }
};

JSON.stringify(user)
// "{"name":"张三"}"
// 上面代码中，JSON.stringify发现参数对象有toJSON方法，就直接使用这个方法的返回值作为参数，而忽略原对象的其他参数。
```

`toJSON`方法的一个应用是，将正则对象自动转为字符串。因为`JSON.stringify`默认不能转换正则对象，但是设置了`toJSON`方法以后，就可以转换正则对象了。

```javascript
var obj = {
  reg: /foo/
};

// 不设置 toJSON 方法时
JSON.stringify(obj) // "{"reg":{}}"

// 设置 toJSON 方法时
RegExp.prototype.toJSON = RegExp.prototype.toString;
JSON.stringify(/foo/) // ""/foo/""
```

上面代码在正则对象的原型上面部署了`toJSON()`方法，将其指向`toString()`方法，因此转换成 JSON 格式时，正则对象就先调用`toJSON()`方法转为字符串，然后再被`JSON.stringify()`方法处理。

## 4. JSON.parse()

`JSON.parse`方法用于将 JSON 字符串转换成对应的值。

如果传入的字符串不是有效的 JSON 格式，`JSON.parse`方法将报错。

为了处理解析错误，可以将`JSON.parse`方法放在`try...catch`代码块中。

`JSON.parse`方法可以接受一个处理函数，作为第二个参数，用法与`JSON.stringify`方法类似。
