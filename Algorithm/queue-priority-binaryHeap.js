/**
 * binary heap （二叉堆）实现优先队列
 *
 * 二叉堆分为大堆，小堆
 * 大堆：每个节点都大于等于它的两个子节点
 * 小堆：每个节点都小于等于它的两个子节点
 *
 * 二叉堆就是一种特殊的二叉树——完全二叉树
 * 所以存储结构使用数组即可，从序号1的位置开始存储元素
 */

/**
 * 大堆
 */
class PriorityQueue {
	constructor() {
		this.count = 0;
		this.list = [];
	}

	isEmpty() {
		return this.count === 0;
	}

	getSize() {
		return this.count;
	}

	getMax() {
		return this.list[1];
	}

	getParent(k = 1) {
		return Math.floor(k / 2);
	}

	leftChildren(k = 1) {
		return k * 2;
	}

	rightChildren(k = 1) {
		return k * 2 + 1;
	}

	exchange(i, j) {
		if (i > this.count || j > this.count) return;
		let temp = this.list[i];
		this.list[i] = this.list[j];
		this.list[j] = temp;
	}

	/**
	 * 改变大小堆
	 * > 大堆
	 * < 小堆
	 * @param {number} i
	 * @param {number} j
	 */
	isLess(i, j) {
		return this.list[i] < this.list[j];
	}

	/**上浮*/
	swim(k = 1) {
		while (k > 1 && this.isLess(this.getParent(k), k)) {
			this.exchange(this.getParent(k), k);
			k = this.getParent(k);
		}
	}

	/**下沉*/
	sink(k = 1) {
		while (this.leftChildren(k) <= this.count) {
			let max = this.leftChildren(k);
			if (this.rightChildren(k) <= this.count && this.isLess(max, this.rightChildren(k))) {
				max = this.rightChildren(k);
			}
			if (this.isLess(max, k)) break;
			this.exchange(k, max);
			k = max;
		}
	}

	/**
	 * 插入到最后的位置，然后上浮到正确的位置
	 * @param {any} ele
	 */
	addElement(ele) {
		this.list[++this.count] = ele;
		this.swim(this.count);
	}

	/**
	 * 第一个位置和最后一个位置交换，删除最后一个位置，然后第一个位置下层到正确位置
	 * @returns {any}
	 */
	deleteElement() {
		let max = this.list[1];
		this.exchange(1, this.count);
		this.list[this.count--] = null;
		this.sink(1);
		return max;
	}
}

let queue = new PriorityQueue();
queue.addElement(3);
queue.addElement(1);
queue.addElement(4);
queue.addElement(5);
queue.addElement(2);
queue.addElement(8);
queue.addElement(9);
console.log(queue.deleteElement());
console.log(queue.getMax());
console.log(queue);
