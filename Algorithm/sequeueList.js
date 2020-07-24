/**
 * 线性表之顺序表
 */
class SequeceList {
	constructor(capacity = 5) {
		this.list = new Array(capacity);
		this.capacity = capacity;
		this.count = 0;
	}

	getCount() {
		return this.count;
	}

	isEmpty() {
		return this.count === 0;
	}

	isOverflow() {
		return this.count >= this.capacity;
	}

	getElementByIndex(index) {
		if (index < 0 || index >= this.count) {
			return null;
		}

		return this.list[index];
	}

	getElementIndex(element) {
		for (let i = 0; i < this.count; i++) {
			if (this.list[i] == element) {
				return i;
			}
		}
		return -1;
	}

	insert(index, element) {
		if (index < 0 || index >= this.capacity) {
			return false;
		}
		for (let i = this.count - 1; i >= index; i--) {
			this.list[i + 1] = this.list[i];
		}

		this.list[index] = element;
		this.count++;
		return true;
	}

	delete(index) {
		if (index < 0 || index >= this.count) {
			return null;
		}

		let ele = this.list[index];

		for (let i = index; i < this.count - 1; i++) {
			this.list[i] = this.list[i + 1];
		}
		this.list[this.count - 1] = null; //最后一位额外处理，置空
		this.count--;
		return ele;
	}

	clear() {
		for (let i = 0; i < this.count; i++) {
			this.list[i] = null;
		}
		this.count = 0;
	}

	destroy() {
		this.count = 0;
		this.list = null;
	}

	print() {
		console.log(this.list);
	}
}

let list = new SequeceList();
list.insert(0, 1);
list.insert(1, 5);
list.insert(2, 15);
list.insert(3, 25);
list.insert(4, 55);
console.log(list);
list.delete(1);
console.log(list);
