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
	 * 链表的第一个数据结点从0开始算，即头结点不算
	 * @param {number} index 从0开始
	 * @param {LinkedNode} node
	 * @returns {boolean}
	 */
	insertByIndex(index, node) {
		if (index >= this.count) {
			return false;
		}

		if (this.isEmpty()) {
			this.head.next = node;
			this.count++;
			return true;
		}

		let currNode = this.head.next; //第一个数据结点
		let idx = 0;
		while (currNode) {
			if (idx === index) {
				break;
			}
			currNode = currNode.node;
			idx++;
		}

		let nextNode = currNode.next;
		currNode.next = node;
		node.next = nextNode;
		this.count++;
		return true;
	}

	/**
	 * 链表的第一个数据结点从0开始算，即头结点不算
	 * @param {number} index 从0开始算
	 * @returns {LinkedNode}
	 */
	deleteByIndex(index) {
		if (index >= this.count || index < 0 || this.isEmpty()) {
			return null;
		}

		let curNode = this.head;
		let idx = -1;
		while (curNode.next) {
			idx++;
			if (idx === index) {
				break;
			}
			curNode = curNode.next;
		}

		let deleteNode = curNode.next;
		curNode.next = deleteNode.next;
		this.count--;
		return deleteNode;
	}

	/**
	 * @param {number} index
	 * @returns {LinkedNode}
	 */
	getElementByIndex(index) {
		if (index < 0 || index >= this.count || this.isEmpty()) {
			return null;
		}

		let curNode = this.head.next;
		let idx = 0;
		while (curNode) {
			if (idx === index) {
				break;
			}
			curNode = curNode.next;
			idx++;
		}
		return curNode;
	}

	print() {
		let str = '';
		let curNode = this.head.next;
		while (curNode) {
			str += curNode.val + ' - ';
			curNode = curNode.next;
		}
		console.log(str);
	}
}
