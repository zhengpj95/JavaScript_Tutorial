/**
 * 二叉搜索树
 */

class BSTNode {
	constructor(value, left, right) {
		this.value = value ? value : 0;
		this.left = left ? left : null;
		this.right = right ? right : null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null; //new BSTNode(); //有头结点
		this.count = 0;
	}

	isEmpty() {
		return this.count === 0;
	}

	size() {
		return this.count;
	}

	/**
	 * @param {BSTNode} node
	 */
	insert(node) {
		let newNode = node;
		if (!(node instanceof BSTNode)) {
			newNode = new BSTNode(node);
		}
		if (this.isEmpty()) {
			this.root = newNode;
			this.count++;
			return;
		}
		this.insertRecusive(this.root, newNode);
	}

	/**
	 * @param {BSTNode} root 子树
	 * @param {BSTNode} node 插入的数据
	 * @returns {boolean}
	 */
	insertRecusive(root, node) {
		if (!root || root.value === node.value) {
			return false;
		}

		if (node.value < root.value) {
			if (root.left) {
				this.insertRecusive(root.left, node);
			} else {
				root.left = node;
				this.count++;
			}
		} else if (node.value > root.value) {
			if (root.right) {
				this.insertRecusive(root.right, node);
			} else {
				root.right = node;
				this.count++;
			}
		}
		return true;
	}

	/**
	 * @param {BSTNode} node
	 */
	remove(node) {
		let newNode = node;
		if (!(node instanceof BSTNode)) {
			newNode = new BSTNode(node);
		}
		this.removeRecusive(this.root, this.root, true, newNode);
	}

	/**
	 * @param {BSTNode} root
	 * @param {BSTNode} parent
	 * @param {boolean} isLeft
	 * @param {BSTNode} node
	 * @returns {boolean}
	 */
	removeRecusive(root, parent, isLeft, node) {
		// 未找到的直接return false
		if (!root || !parent) {
			return false;
		}
		if (node.value < root.value) {
			this.removeRecusive(root.left, root, true, node);
		} else if (node.value > root.value) {
			this.removeRecusive(root.right, root, false, node);
		} else {
			// find
			// 无left，无right
			if (root.left === null && root.right === null) {
				if (isLeft) {
					parent.left = null;
				} else {
					parent.right = null;
				}
				this.count--;
				return true;
			} else if (root.right === null) {
				parent = root;
				parent.left = null;
				this.count--;
				return true;
			} else if (root.left === null) {
				parent = root;
				parent.right = null;
				this.count--;
				return true;
			} else {
				// 从右子树中找到最小值作为新的节点
				let minNode = this.getMinNode(root.right);
				root.value = minNode.value;
				this.removeRecusive(root.right, root, false, minNode);
				this.count--;
				return true;
			}
		}
	}

	/**
	 * @param {BSTNode} node
	 * @returns {BSTNode}
	 */
	search(node) {
		let newNode = node;
		if (!(node instanceof BSTNode)) {
			newNode = new BSTNode(node);
		}
		if (this.isEmpty()) {
			return null;
		}
		return this.searchRecusive(this.root, newNode);
	}

	/**
	 * @param {BSTNode} root
	 * @param {BSTNode} node
	 * @returns {BSTNode}
	 */
	searchRecusive(root, node) {
		if (!root) {
			return null;
		}

		if (root.value == node.value) {
			return root;
		}
		if (node.value < root.value) {
			return this.searchRecusive(root.left, node);
		} else {
			return this.searchRecusive(root.right, node);
		}
	}

	/**前序遍历*/
	preOrderTraversal() {
		let res = [];
		let traversal = (root) => {
			if (!root) return;
			res.push(root.value);
			traversal(root.left);
			traversal(root.right);
		};
		traversal(this.root);
		return res;
	}

	/**中序遍历*/
	inOrderTraversal() {
		let res = [];
		let traversal = (root) => {
			if (!root) return;
			traversal(root.left);
			res.push(root.value);
			traversal(root.right);
		};
		traversal(this.root);
		return res;
	}

	/**后序遍历*/
	postOrderTraversal() {
		let res = [];
		let traversal = (root) => {
			if (!root) return;
			traversal(root.left);
			traversal(root.right);
			res.push(root.value);
		};
		traversal(this.root);
		return res;
	}

	maxNodeValue() {
		let root = this.root;
		if (!root) {
			return null;
		}

		while (root && root.right) {
			root = root.right;
		}
		return root;
	}

	/**
	 * @param {BSTNode} root
	 * @returns {BSTNode}
	 */
	getMinNode(root) {
		if (!root) {
			return null;
		}

		while (root && root.left) {
			root = root.left;
		}
		return root;
	}

	minNodeValue() {
		return this.getMinNode(this.root);
	}

	maxValue() {
		// if (this.isEmpty()) {
		// 	return null;
		// }
		// let res = this.inOrderTraversal();
		// return res[res.length - 1];
		let maxNode = this.maxNodeValue();
		return maxNode ? maxNode.value : null;
	}

	minValue() {
		// if (this.isEmpty()) {
		// 	return null;
		// }
		// let res = this.inOrderTraversal();
		// return res[0];
		let minNode = this.minNodeValue();
		return minNode ? minNode.value : null;
	}

	destroy() {
		this.root = null;
		this.count = 0;
	}
}

let bst = new BinarySearchTree();
let node1 = new BSTNode(1);
let node2 = new BSTNode(2);
let node3 = new BSTNode(3);
let node4 = new BSTNode(4);
let node5 = new BSTNode(5);
bst.insert(node2);
bst.insert(node1);
bst.insert(node4);
bst.insert(node3);
bst.insert(node5);
// console.log(bst);
// console.log(bst.preOrderTraversal());
// console.log(bst.inOrderTraversal());
// console.log(bst.postOrderTraversal());
// console.log(`Max value: `, bst.maxValue());
// console.log(`Min value: `, bst.minValue());
// bst.destroy();
// console.log(bst);
// console.log(bst.minNodeValue());
// console.log(bst.maxNodeValue());
console.log(`================remove================`);
console.log(bst.inOrderTraversal());
console.log(bst.search(node4));
bst.remove(2);
console.log(bst.inOrderTraversal());
