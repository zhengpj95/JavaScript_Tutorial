/**
 * js-模拟实现栈
 */

class Stack {
	constructor(capacity = 5) {
		this.capacity = capacity;
		this.stack = new Array(capacity);
		this.top = 0; //栈顶
	}

	isEmpty() {
		return this.top === 0;
	}

	isOverflow() {
		return this.top >= this.capacity;
	}

	getCount() {
		return this.top;
	}

	push(data) {
		if (this.isOverflow()) {
			return false;
		}
		this.stack[this.top] = data;
		this.top++;
		return true;
	}

	pop() {
		if (this.isEmpty()) {
			return false;
		}
		this.top--; //必须先--
		let data = this.stack[this.top];
		this.stack[this.top] = null;
		return data;
	}

	clear() {
		this.top = 0;
		this.stack = new Array(this.capacity);
	}

	destroy() {
		this.stack = null;
		this.top = 0;
	}

	print() {
		let res = [];
		for (let i = this.top - 1; i >= 0; i--) {
			res.push(this.stack[i]);
		}
		console.log(res);
	}
}

let stack = new Stack();
stack.push(1);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(141);
stack.push(142);
console.log(stack.pop());
console.log(stack);
