/**
 * 希尔排序
 * 1. 选择一个增量序列 t1, t2, ..., tk, 其中 ti > tj, tk = 1
 * 2. 按增量序列个数k，对序列进行k趟排序
 * 3. 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m的子序列，分别对各子表进行直接插入排序。
 *    仅增量因子为1时，整个序列作为一个表来处理，表长度即为整个序列的长度
 */

/**
 * @param {number[]} nums 
 */
const shellSort = function (nums) {
	let n = nums.length;
	let time = Math.floor(n / 2);
	while (time > 1) {

	}
	console.log(nums);
};

let arr = [1, 5, 7, 8, 2, 3, 4, 6, 9, 10];
shellSort(arr);