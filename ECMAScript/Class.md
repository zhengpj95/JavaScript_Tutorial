# Class

## 1. 简介

ES6引入了`Class`这个概念，作为对象的模板。通过关键字`class`，可以定义类。

类中的`constructor`方法是构造函数，`this`关键字则代表实例对象。

在类中定义方法时，不需要加function关键字，在方法之间不需要逗号分隔。

类的数据类型就是函数，类本身就指向构造函数。

```javascript
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor  // true
```

使用的时候，通过`new`命令。类的所有方法都定义在类的 `prototype` 属性上面。在类的实例上面调用方法，其实就是调用原型上的方法。

由于类的方法都定义在`prototype`对象上面，所以类的新方法可以添加在`prototype`对象上面。`Object.assign`方法可以很方便地一次向类添加多个方法。类的内部所有定义的方法，都是不可枚举的（non-enumerable）。

```javascript
Object.assign(Point.prototype, {
  toString(){},
  toValue(){},
  // ...
})
```

### constructor 方法

`constructor` 方法是类的默认方法，通过 `new` 命令生成对象实例时，自动调用该方法。一个类必须有 `constructor` 方法，如果没有显示定义，一个空的 `constructor` 方法会被默认添加。

### 类的实例

实例的属性除非显示定义在其本身（即定义在 `this` 对象上），否则都是定义在原型上（即定义在 `class` 上）。

类的所有实例共享一个原型对象。

可以通过实例的`__proto__`属性为“类”添加方法。

`__proto__` 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。使用实例的 `__proto__` 属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。

### Class 表达式

注意：这个类的名字是 `Me` ，但是 `Me` 只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用 `MyClass` 引用。

如果类的内部没用到的话，可以省略 `Me` 。

采用 Class 表达式，可以写出立即执行的 Class。

```javascript
const MyClass = class Me {
  getClassName() {
    // ...
  }
}
// ======== 立即执行的类的实例 =========
let person = new class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}('zhangsan');

person.sayName();   // "zhangsan"
```

### 注意点

- 严格模式
  - 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式；
  - 只要你的代码写在类或模块之中，就只有严格模式可用；
  - 虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式；
- 不存在提升
  - 因为这与继承有关，必须保证子类在父类之后定义；
- name 属性
  - name属性总是返回紧跟在class关键字后面的类名；
- Generator 方法
  - 如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数；
- this 的指向
  - 类的**方法**内部如果含有this，它默认指向类的实例；
  - 解决方法：
    - 在构造函数中绑定 `this`
    - 使用箭头函数
    - 使用 `Proxy`

```javascript
this.printName = this.printName.bind(this); // printName是方法名
this.getThis = () => this;  // getThis是方法名
```

## 2. 静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。

方法前加上 `static` 关键字，表示该方法不会被实例继承，而是直接通过类来调用。

如果静态方法包含 `this` 关键字，这个 `this` 指的是类，而不是实例。

静态方法可以与非静态方法重名。

子类可以调用父类的静态方法。

静态方法也是可以从 `super` 对象上调用的。

## 3.实例属性的新写法

实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。

与方法同层，不需要加 `this`

## 4.静态属性

静态属性指的是 Class 本身的属性，而不是定义在实例对象（this）上的属性。

在属性前加上 `static` 关键字即可。

## 5.私有方法和私有属性

在属性或方法面前，加上 `#` 符号；

可以在私有属性和私有方法前，加上 `static` 关键字，表示静态的私有属性或静态的私有方法。

## 6.new.target 属性

new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。

Class 内部调用new.target，返回当前 Class。

子类继承父类时，new.target会返回子类。

注意，在函数外部，使用new.target会报错。

## 继承

子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。

在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。

Object.getPrototypeOf方法可以用来从子类上获取父类。因此，可以使用这个方法判断，一个类是否继承了另一个类。
