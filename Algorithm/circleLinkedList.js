/**
 * 链表之循环链表
 */

class LinkedNode {
	constructor(val, next) {
		this.val = val ? val : 0;
		this.next = next ? next : null;
	}
}

class CircleLinkedList {
	constructor() {
		this.head = new LinkedNode();
		this.head.next = this.head; //指向自身
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
		// if (this.isEmpty()) {
		// 	this.head.next = node;
		// 	node.next = this.head;
		// } else {
		// 	node.next = this.head.next;
		// 	this.head.next = node;
		// }
		node.next = this.head.next;
		this.head.next = node;
		this.count++;
		return true;
	}

	/**
	 * @param {LinkedNode} node
	 * @returns {boolean}
	 */
	insetTail(node) {
		if (!node) {
			return false;
		}
		if (this.isEmpty()) {
			this.head.next = node;
			node.next = this.head;
		} else {
			// 找到最后一个结点
			let curNode = this.head.next;
			for (let i = 0; i < this.count - 1; i++) {
				curNode = curNode.next;
			}
			curNode.next = node;
			node.next = this.head;
		}
		this.count++;
		return true;
	}

	insertByIndex(index, node) {}

	deleteByIndex(index) {}

	destroy() {
		this.head.next = this.head;
		this.count = 0;
	}

	print() {
		let str = '';
		let curNode = this.head.next;
		for (let i = 0; i < this.count; i++) {
			str += curNode.val + ' ';
			curNode = curNode.next;
		}
		console.log(str);
	}
}

let list = new CircleLinkedList();
let node1 = new LinkedNode(11);
let node2 = new LinkedNode(22);
let node3 = new LinkedNode(33);
let node4 = new LinkedNode(44);
let node5 = new LinkedNode(55);
list.insertHead(node1);
list.insertHead(node2);
list.insertHead(node3);
list.insetTail(node5);
list.insetTail(node4);
console.log(list);

list.print();
