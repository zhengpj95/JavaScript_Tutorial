/**
 * 链表之双向链表
 */

class LinkedNode {
	constructor(val, pre, next) {
		this.val = val ? val : 0;
		this.pre = pre ? pre : null;
		this.next = next ? next : null;
	}
}

class DoubleLinkedList {
	constructor() {
		this.head = new LinkedNode(); //带有头结点
		this.count = 0;
	}

	isEmpty() {
		return this.count === 0;
	}

	size() {
		return this.count;
	}

	/**
	 * @param {LinedNode} node
	 * @returns {boolean}
	 */
	inertHead(node) {}

	/**
	 * @param {LinedNode} node
	 * @returns {boolean}
	 */
	insertTail(node) {}

	/**
	 * @param {number} index
	 * @param {LinedNode} node
	 * @returns {boolean}
	 */
	insertByIndex(index, node) {}

	/**
	 * @param {number} index
	 * @returns {LinkedNode}
	 */
	deleteByIndex(index) {}

	destroy() {}

	print() {}
}
