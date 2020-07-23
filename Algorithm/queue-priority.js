/**
 * js-模拟具有优先级的队列
 */

class Queue {
	constructor(elements) {
		if (elements && !(elements instanceof Array)) {
			throw new Error('Must be an Array');
		}
		this.elements = elements || [];
	}

	/**
	 * @param {any} element
	 * @param {number} priority 数值越大优先级越高
	 */
	add(element, priority) {
		let newData = { data: element, priority: priority };
		if (this.isEmpty()) {
			this.elements.push(newData);
			return;
		}

		let isAdd = false;
		for (let i = 0; i < this.getCount(); i++) {
			let item = this.elements[i];
			if (item && priority > item.priority) {
				this.elements.splice(i, 0, newData);
				isAdd = true;
				break;
			}
		}

		if (!isAdd) {
			this.elements.push(newData);
		}
	}

	delete() {
		return this.elements.shift();
	}

	isEmpty() {
		return this.getCount() === 0;
	}

	getCount() {
		return this.elements.length;
	}

	getElementsByPriority(priority) {
		let res = [];
		for (let item of this.elements) {
			if (item && item.priority === priority) {
				res.push(item);
			}
		}
		return res;
	}

	print() {
		console.log(this.elements);
	}
}

let queue = new Queue();
queue.add('James', 1);
queue.add('John', 11);
queue.add('Tims', 11);
queue.add('Litty', 12);
console.log(queue.getElementsByPriority(11));
console.log(queue.getCount());
console.log(queue.delete());
console.log(queue);
