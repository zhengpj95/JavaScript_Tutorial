class Person {

	constructor() {
		this.printName = this.printName.bind(this);
	}

	printName(name = 'zhangsan') {
		this.print(`Hello, ${name}`);
	}

	printName2 = (name = 'lisi') => {
		this.print(`Hello, ${name}`);
	}

	print(txt) {
		console.log(txt);
	}
}

const person = new Person();
person.printName('zhangsan');//这样调用，Person类内的this指向Person的实例

const { printName, printName2 } = person;
printName('zhangsansan');
printName2('lisi');//这样调用，Person类内的this指向undefined

/**
 * 解决方案
 * 1. 在构造方法中绑定this，如this.printName = this.printName.bind(this);
 * 2. 使用箭头函数，如printName2()方法
 */
