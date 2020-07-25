/**
 * 线性表之链表
 */

class LinkedNode {
	constructor(val, next) {
		this.val = val ? val : 0;
		this.next = next ? next : null;
	}
}

class SingleLinkedList {
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
	 * @param {LinkedNode} node
	 * @returns {boolean}
	 */
	insertHead(node) {
		if (!node) {
			return false;
		}
		if (!this.head.next) {
			this.head.next = node;
			node.head = null;
		} else {
			let nextNode = this.head.next;
			this.head.next = node;
			node.next = nextNode;
		}
		this.count++;
		return true;
	}

	/**
	 * @param {LinkedNode} node
	 * @returns {boolean}
	 */
	insertTail(node) {
		if (!node) {
			return false;
		}

		if (!this.head.next) {
			this.head.next = node;
		} else {
			while (this.head.next) {
				this.head = this.head.next;
			}
			this.head.next = node;
		}

		this.count++;
		return true;
	}

	/**
	 * @param {number} index
	 * @param {LinkedNode} node
	 * @returns {boolean}
	 */
	insertByIndex(index, node) {}

	/**
	 * @param {number} index
	 * @returns {LinkedNode}
	 */
	deleteByIndex(index) {}

	/**
	 * @param {number} index
	 * @returns {LinkedNode}
	 */
	getElementByIndex(index) {}
}
