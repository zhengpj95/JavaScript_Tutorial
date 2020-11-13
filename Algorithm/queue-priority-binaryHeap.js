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
	/**
	 * 控制大堆还是小堆，默认大堆
	 * false: 大堆
	 * true: 小堆
	 * @param {number} a
	 * @param {number} b
	 */
	compare = (a, b) => a > b;

	constructor(compare = this.compare) {
		this.count = 0;
		this.list = [];
		this.compare = compare;
	}

	isEmpty() {
		return this.count === 0;
	}

	getSize() {
		return this.count;
	}

	getTop() {
		return this.isEmpty() ? null : this.list[1];
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
	 * @param {number} i
	 * @param {number} j
	 */
	isLarge(i, j) {
		return this.compare(this.list[i], this.list[j]);
	}

	/**
	 * 上浮
	 * 从最后一位开始上浮
	 */
	swim(k = this.count) {
		while (k > 1 && this.isLarge(this.getParent(k), k)) {
			this.exchange(this.getParent(k), k);
			k = this.getParent(k);
		}
	}

	/**
	 * 下沉
	 * 从top的位置开始下沉
	 */
	sink(k = 1) {
		while (this.leftChildren(k) <= this.count) {
			let max = this.leftChildren(k);
			if (this.rightChildren(k) <= this.count && this.isLarge(max, this.rightChildren(k))) {
				max = this.rightChildren(k);
			}
			if (this.isLarge(max, k)) break;
			this.exchange(k, max);
			k = max;
		}
	}

	/**
	 * 插入到最后的位置，然后上浮到正确的位置
	 * @param {any} ele
	 */
	enqueue(ele) {
		this.list[++this.count] = ele;
		this.swim();
	}

	/**
	 * 第一个位置和最后一个位置交换，删除最后一个位置，然后第一个位置下层到正确位置
	 * @returns {any}
	 */
	dequeue() {
		if (this.isEmpty()) return null;
		let max = this.list[1];
		this.exchange(1, this.count);
		this.list[this.count--] = null;
		this.sink();
		return max;
	}

	/**
	 * 堆排序
	 * @returns {any[]}
	 */
	heapSort() {
		let result = [];
		while (this.count > 0) {
			result.push(this.dequeue());
		}
		return result;
	}

	/**
	 * @param {any[]} data
	 */
	createHeap(data) {
		for (let i = 0; i < data.length; i++) {
			this.enqueue(data[i]);
		}
		// return this.list;
	}
}

let queue = new PriorityQueue((a, b) => a > b);
queue.enqueue(3);
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(9);
queue.enqueue(90);
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(8);
queue.enqueue(9);
queue.createHeap([80, 120, 15]);
// console.log('deleteElement: ', queue.dequeue());
console.log('topElement: ', queue.getTop());
// console.log(queue);
console.log('heapSort: ', queue.heapSort().join('->'));
