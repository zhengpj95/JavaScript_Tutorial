class HuffmanNode {

	constructor(weight, lChild, rChild) {
		this.weight = weight;
		this.lChild = lChild;
		this.rChild = rChild;
	}
}

class Huffman {

	constructor(arr) {
		// 哈夫曼树
		this.huffmanTree = {};
		// 创建原始哈夫曼结点
		this.initTreeNode = this.createNode(arr);
		// 排序后哈夫曼结点
		this.treeNode = this.shallowClone(this.initTreeNode);
	}

	// 创建结点
	createNode(arr) {
		let result = [];
		for (let item of arr) {
			result.push(new HuffmanNode(item, null, null));
		}
		return result;
	}

	shallowClone(arr) {
		let result = [];
		for (let item of arr) {
			result.push(item);
		}
		return result.sort((a, b) => a.weight - b.weight);
	}

	createHuffman() {
		while (this.treeNode.length > 1) {
			let twoMinWeight = this.getTwoMinWeight();
			let nodeOne = twoMinWeight[0];
			let nodeTwo = twoMinWeight[1];
			let newNode = new HuffmanNode(nodeOne.weight + nodeTwo.weight, nodeOne, nodeTwo);
			this.putMixtureWeight(newNode);
		}
		this.huffmanTree = this.treeNode[0];
		return this.huffmanTree;
	}

	// 获取权值最小的两个结点
	getTwoMinWeight() {
		this.treeNode.sort((a, b) => a.weight - b.weight);

		let result = [];
		if (this.treeNode.length > 1) {
			result = [].concat(this.treeNode.shift(), this.treeNode.shift());
		}
		return result;
	}

	// 放入两个权值连接后的结点
	putMixtureWeight(mixtureValue) {
		if (mixtureValue) {
			this.treeNode.push(mixtureValue);
		}
	}

	// 前序遍历
	previousOrder(root) {
		if (!root) {
			return;
		}
		// if (!root.lChild && !root.rChild) {
		// 	console.log(root.weight);
		// }
		console.log(root.weight);
		this.previousOrder(root.lChild);
		this.previousOrder(root.rChild);
	}

	// 中序遍历
	middleOrder(root) {
		if (!root) {
			return;
		}
		this.middleOrder(root.lChild);
		// if (!root.lChild && !root.rChild) {
		// 	console.log(root.weight);
		// }
		console.log(root.weight);
		this.middleOrder(root.rChild);
	}

	// 后序遍历
	nextOrder(root) {
		if (!root) {
			return;
		}
		this.nextOrder(root.lChild);
		this.nextOrder(root.rChild);
		// if (!root.lChild && !root.rChild) {
		// 	console.log(root.weight);
		// }
		console.log(root.weight);
	}
}

let arr = [2, 3, 18, 7, 9, 25, 6];
let huffman = new Huffman(arr);
// console.log(huffman.treeNode);
let huffmanTree = huffman.createHuffman();
// console.log(huffmanTree);
huffman.previousOrder(huffmanTree);