/**
 * js-模拟队列
 */

function Queue(elements) {
	if (elements && !(elements instanceof Array)) {
		throw new Error('Must be an Array!');
	}
	this.elements = elements || [];
}

Queue.prototype.add = function (element) {
	this.elements.push(element);
};

Queue.prototype.delete = function () {
	return this.elements.shift();
};

Queue.prototype.isEmpty = function () {
	return this.elements.length === 0;
};

Queue.prototype.print = function () {
	console.log(this.elements);
};

let queue = new Queue(['A', 'B', 'C']);
queue.add('a');
queue.add('e');
queue.print();
console.log(queue.delete());
queue.print();
