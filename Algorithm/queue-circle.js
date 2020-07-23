/**
 * js-模拟循环队列（环形队列）
 */

class Queue {
	constructor(capacity = 5) {
		this.capacity = capacity;
		this.init();
	}

	init() {
		this.queue = new Array(this.capacity);
		this.head = 0; //队列头
		this.tail = 0; //队列尾
		this.count = 0; //元素个数
	}

	isEmpty() {
		return this.count === 0;
	}

	/**
	 * 队列判满
	 */
	isOverflow() {
		return this.count >= this.capacity;
	}

	add(data) {
		if (this.isOverflow()) {
			// 已满不可再添加
			return false;
		}

		this.queue[this.tail] = data;
		this.tail++;
		this.tail = this.tail % this.capacity;
		this.count++;
		return true;
	}

	delete() {
		if (this.isEmpty()) {
			return null;
		}

		let data = this.queue[this.head];
		this.head++;
		this.head = this.head % this.capacity;
		this.count--;
		return data;
	}

	getCount() {
		return this.count;
	}

	getCapacity() {
		return this.capacity;
	}

	clear() {
		this.queue = new Array(this.capacity);
		this.head = 0;
		this.tail = 0;
		this.count = 0;
	}

	print() {
		// for (let i = this.head; i < this.head + this.capacity; i++) {
		// 	console.log(this.queue[i % this.capacity]);
		// }
		console.log(this.queue);
	}
}

let queue = new Queue(8);
queue.add('aaa1');
queue.add('aaa2');
queue.add('aaa3');
queue.add('aaa4');
queue.add('aaa5');
queue.add('aaa6');
queue.add('aaa7');
queue.add('aaa7');
console.log(queue);
queue.clear();
console.log(queue);
