
# Number对象

## 1. 概述

Number对象是数值对应的包装对象，可以作为构造函数使用，也可以作为工具函数使用。
作为构造函数时，它用于生成值为数值的对象。
作为工具函数时，它可以将任何类型的值转为数值。

## 2. 静态属性

Number对象拥有以下一些静态属性（即直接定义在Number对象上的属性，而不是定义在实例上的属性）。

- Number.POSITIVE_INFINITY：正的无限，指向Infinity。
- Number.NEGATIVE_INFINITY：负的无限，指向-Infinity。
- Number.NaN：表示非数值，指向NaN。
- Number.MIN_VALUE：表示最小的正数（即最接近0的正数，在64位浮点数体系中为5e-324），相应的，最接近0的负数为-Number.MIN_VALUE。
- Number.MAX_SAFE_INTEGER：表示能够精确表示的最大整数，即9007199254740991。
- Number.MIN_SAFE_INTEGER：表示能够精确表示的最小整数，即-9007199254740991。

## 3. 实例方法

Number对象有4个实例方法，都跟将数值转换为指定格式有关。

### 3.1 Number.prototype.toString()

将一个数值转为字符串形式。
toString方法可以接受一个参数，表示输出的进制。如果省略这个参数，默认将数值先转为十进制，再输出字符串；否则，就根据参数指定的进制，将一个数字转化成某个进制的字符串。

toString方法只能将十进制的数，转为其他进制的字符串。如果要将其他进制的数，转回十进制，需要使用parseInt方法。

### 3.2 Number.prototype.toFixed()

toFixed方法先将一个数转为指定位数的小数，然后返回这个小数对应的字符串。

### 3.3 Number.prototype.toExponential()

将一个数转为科学计数法形式。

### 3.4 Number.prototype.toPrecision()

将一个数转为指定位数的有效数字。

## 4. 自定义方法

与其他对象一样，Number.prototype对象上面可以自定义方法，被Number的实例继承。
