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
	insertHead(node) {
		if (!node) {
			return false;
		}

		if (this.isEmpty()) {
			this.head.next = node;
			node.pre = this.head;
		} else {
			node.next = this.head.next;
			this.head.next.pre = node;
			this.head.next = node;
			node.pre = this.head;
		}
		this.count++;
		return true;
	}

	/**
	 * @param {LinedNode} node
	 * @returns {boolean}
	 */
	insertTail(node) {
		if (!node) {
			return false;
		}

		if (this.isEmpty()) {
			this.head.next = node;
			node.pre = this.head;
		} else {
			let curNode = this.head.next;
			while (curNode.next) {
				curNode = curNode.next;
			}
			curNode.next = node;
			node.pre = curNode;
		}
		this.count++;
		return true;
	}

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

	destroy() {
		this.head.next = null;
		this.count = 0;
	}

	print() {
		let str = '';
		let curNode = this.head.next;
		while (curNode) {
			str += curNode.val + ' ';
			curNode = curNode.next;
		}
		console.log(str);
	}
}

let list = new DoubleLinkedList();
let node1 = new LinkedNode(11);
let node2 = new LinkedNode(22);
let node3 = new LinkedNode(33);
let node4 = new LinkedNode(44);
let node5 = new LinkedNode(55);
list.insertHead(node3);
list.insertHead(node1);
list.insertHead(node2);
list.insertTail(node5);
list.insertTail(node4);
console.log(list);
list.print();
