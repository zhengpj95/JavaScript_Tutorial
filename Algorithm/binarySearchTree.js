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
	 * 以头结点的左子树为顶结点
	 * @param {BSTNode} node
	 */
	insert(node) {
		if (this.isEmpty()) {
			this.root = node;
			this.count++;
			return;
		}
		this.insetRecusive(this.root, node);
	}

	/**
	 * @param {BSTNode} root 子树
	 * @param {BSTNode} node 插入的数据
	 * @returns {boolean}
	 */
	insetRecusive(root, node) {
		if (!root || root.value === node.value) {
			return false;
		}

		if (node.value < root.value) {
			if (root.left) {
				this.insetRecusive(root.left, node);
			} else {
				root.left = node;
				this.count++;
			}
		} else if (node.value > root.value) {
			if (root.right) {
				this.insetRecusive(root.right, node);
			} else {
				root.right = node;
				this.count++;
			}
		}
		return true;
	}

	/**
	 * @param {BSTNode} node
	 * @returns {boolean}
	 */
	remove(node) {}

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
console.log(bst);
console.log(bst.preOrderTraversal());
console.log(bst.inOrderTraversal());
console.log(bst.postOrderTraversal());
console.log(`Max value: `, bst.maxValue());
console.log(`Min value: `, bst.minValue());
// bst.destroy();
// console.log(bst);
console.log(bst.minNodeValue());
console.log(bst.maxNodeValue());
