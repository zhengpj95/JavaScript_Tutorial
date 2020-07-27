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
		this.root = null;
		this.count = 0;
	}

	isEmpty() {
		return this.count === 0;
	}

	size() {
		return this.count;
	}

	insert(value) {}

	remove(value) {}

	/**前序遍历*/
	preOrderTraversal() {}

	/**中序遍历*/
	inOrderTraversal() {}

	/**后序遍历*/
	postOrderTraversal() {}

	maxValue() {}

	minValue() {}

	destroy() {}
}
