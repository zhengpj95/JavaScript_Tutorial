
# String对象

## 1. 概述

String对象是 JavaScript 原生提供的三个包装对象之一，用来生成字符串对象。

```javascript
var s1 = 'abc';
var s2 = new String('abc');

typeof s1 // "string"
typeof s2 // "object"

s2.valueOf() // "abc"
```

String对象还可以当作工具方法使用，将任意类型的值转为字符串。

## 2. 静态方法

String对象提供的静态方法（即定义在对象本身，而不是定义在对象实例的方法），
主要是String.fromCharCode()。该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串。

## 3. 实例属性

String.prototype.length
字符串实例的length属性返回字符串的长度。

## 4. 实例方法

### 4.1 String.prototype.charAt()

charAt方法返回指定位置的字符，参数是从0开始编号的位置。
这个方法完全可以用数组下标替代。
如果参数为负数，或大于等于字符串的长度，charAt返回空字符串。

### 4.2 String.prototype.charCodeAt()

返回字符串指定位置的 Unicode 码点（十进制表示），相当于`String.fromCharCode()`的逆操作。

### 4.3 String.prototype.concat()

连接两个字符串，返回一个新字符串，不改变原字符串。

该方法可以接受多个参数。

如果参数不是字符串，`concat`方法会将其先转为字符串，然后再连接。

### 4.4 String.prototype.slice()

从原字符串取出子字符串并返回，不改变原字符串。它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。

如果省略第二个参数，则表示子字符串一直到原字符串结束。

如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度。

如果第一个参数大于第二个参数，`slice`方法返回一个空字符串。

### 4.5 String.prototype.substring()

从原字符串取出子字符串并返回，不改变原字符串，跟`slice`方法很相像。

它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）。

如果省略第二个参数，则表示子字符串一直到原字符串的结束。

如果第一个参数大于第二个参数，`substring`方法会自动更换两个参数的位置。

如果参数是负数，`substring`方法会自动将负数转为0。

由于这些规则违反直觉，因此不建议使用`substring`方法，应该优先使用`slice`。

### 4.6 String.prototype.substr()

从原字符串取出子字符串并返回，不改变原字符串，跟`slice`和`substring`方法的作用相同。

`substr`方法的第一个参数是子字符串的开始位置（从0开始计算），第二个参数是子字符串的长度。

如果省略第二个参数，则表示子字符串一直到原字符串的结束。

如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串。

**slice, substring, substr比较：**

- 三者均接受两个参数；
- 从原字符串中去除子字符串并返回，不改变原字符串；
- 第一个参数是子字符串的开始位置（从0开始计算）；
- slice, substring的第二个参数是子字符串的结束位置（不含该位置）；
- substr的第二个擦拭农户是子字符串的长度；
- 如果省略第二个参数，则表示子字符串一直到原字符串结束。
- 参数是负数：
  - slice从结尾开始倒数计算；
  - substring会自动将负数变为0；
  - substr第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串。
- 第一个参数大于第二个参数：
  - slice返回一个空字符串；
  - substring会自动更换两个参数的位置；
  - substr无所谓，因为第二个参数是子字符串的长度。

### 4.7 String.prototype.indexOf()，String.prototype.lastIndexOf()

用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回`-1`，就表示不匹配。

`indexOf`方法还可以接受第二个参数，表示从该位置开始向后匹配。

lastIndexOf则与indexOf相反。

### 4.8 String.prototype.trim()

用于去除字符串两端的空格，返回一个新字符串，不改变原字符串。

该方法去除的不仅是空格，还包括制表符（`\t`、`\v`）、换行符（`\n`）和回车符（`\r`）。

### 4.9 String.prototype.toLowerCase()，String.prototype.toUpperCase()

`toLowerCase`方法用于将一个字符串全部转为小写，`toUpperCase`则是全部转为大写。它们都返回一个新字符串，不改变原字符串。

### 4.10 String.prototype.match()

`match`方法用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回`null`。

```javascript
'cat, bat, sat, fat'.match('at') // ["at"]
'cat, bat, sat, fat'.match('xt') // null
```

返回的数组还有`index`属性和`input`属性，分别表示匹配字符串开始的位置和原始字符串。

```javascript
var matches = 'cat, bat, sat, fat'.match('at');
matches.index // 1
matches.input // "cat, bat, sat, fat"
```

`match`方法还可以使用正则表达式作为参数

### 4.11 String.prototype.search()，String.prototype.replace()

`search`方法的用法基本等同于`match`，但是返回值为匹配的第一个位置。如果没有找到匹配，则返回`-1`。

`replace`方法用于替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有`g`修饰符的正则表达式）。

### 4.12 String.prototype.split()

`split`方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

如果分割规则为空字符串，则返回数组的成员是原字符串的每一个字符。

如果省略参数，则返回数组的唯一成员就是原字符串。

如果满足分割规则的两个部分紧邻着（即两个分割符中间没有其他字符），则返回数组之中会有一个空字符串。

```javascript
'a||c'.split('|') // ['a', '', 'c']
```

如果满足分割规则的部分处于字符串的开头或结尾（即它的前面或后面没有其他字符），则返回数组的第一个或最后一个成员是一个空字符串。

`split`方法还可以接受第二个参数，限定返回数组的最大成员数。

### 4.13 String.prototype.localeCompare()

`localeCompare`方法用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串。

该方法的最大特点，就是会考虑自然语言的顺序。举例来说，正常情况下，大写的英文字母小于小写字母。

```javascript
'B' > 'a' // false
// 上面代码中，字母B小于字母a。因为 JavaScript 采用的是 Unicode 码点比较，B的码点是66，而a的码点是97。
```

但是，`localeCompare`方法会考虑自然语言的排序情况，将`B`排在`a`的前面。

```javascript
'B'.localeCompare('a') // 1
// localeCompare方法返回整数1，表示B较大。
```
