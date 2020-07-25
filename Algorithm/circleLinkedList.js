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
	 *
	 * @param {LinkedNode} node
	 * @returns {boolean}
	 */
	insertHead(node) {
		if (!node) {
			return false;
		}
		if (this.isEmpty()) {
			this.head.next = node;
			node.next = this.head;
		} else {
			node.next = this.head.next;
			this.head.next = node;
		}
		this.count++;
		return true;
	}

	insetTail(node) {}

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
list.insertHead(node1);
list.insertHead(node3);
list.insertHead(node2);
console.log(list);

list.print();
