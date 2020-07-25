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
	 * 第一个数据结点从0开始计算
	 * @param {number} index 从0开始
	 * @param {LinedNode} node
	 * @returns {boolean}
	 */
	insertByIndex(index, node) {
		if (index < 0 || index > this.count) {
			return false;
		}

		if (this.isEmpty()) {
			this.head.next = node;
			node.pre = this.head;
		} else {
			let idx = -1;
			let curNode = this.head.next;
			while (curNode.next) {
				idx++;
				if (idx == index) {
					break;
				}
				curNode = curNode.next;
			}
			node.next = curNode;
			curNode.pre.next = node;
			node.pre = curNode.pre;
			curNode.pre = node;
		}

		this.count++;
		return true;
	}

	/**
	 * @param {number} index
	 * @returns {LinkedNode}
	 */
	deleteByIndex(index) {
		if (index < 0 || index >= this.count || this.isEmpty()) {
			return null;
		}

		let curNode = this.head.next;
		let idx = -1;
		while (curNode.next) {
			idx++;
			if (idx === index) {
				break;
			}
			curNode = curNode.next;
		}
		curNode.pre.next = curNode.next;
		// 非尾结点
		if (curNode.next) {
			curNode.next.pre = curNode.pre;
		}
		curNode.next = null;
		curNode.pre = null;
		return curNode;
	}

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
let node6 = new LinkedNode(66);
list.insertHead(node3);
list.insertHead(node1);
list.insertHead(node2);
list.insertTail(node5);
list.insertByIndex(2, node6);
list.insertByIndex(0, node4);
// console.log(list);
list.print();
let node = list.deleteByIndex(2);
console.log(node);
list.print();
list.destroy();
console.log(list);
