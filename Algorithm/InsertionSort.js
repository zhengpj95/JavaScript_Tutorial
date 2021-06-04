/**
 * 插入排序
 * @param {[]} a
 * @param {number} from
 * @param {number} to
 */
function insertionSort(a, from, to) {
	for (var i = from + 1; i < to; i++) {
		let element = a[i];
		let j = i - 1;
		for (; j >= from; j--) {
			let tmp = a[j];
			if (element - tmp < 0) {
				a[j + 1] = tmp;
			} else {
				break;
			}
		}
		a[j + 1] = element;
	}
}

let arr = [2, 4, 5, 1, 3, 8];
insertionSort(arr, 0, arr.length);
console.log(arr);
