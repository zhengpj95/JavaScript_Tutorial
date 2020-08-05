/**
 * 希尔排序
 * 1. 选择一个增量序列 t1, t2, ..., tk, 其中 ti > tj, tk = 1
 * 2. 按增量序列个数k，对序列进行k趟排序
 * 3. 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m的子序列，分别对各子表进行直接插入排序。
 *    仅增量因子为1时，整个序列作为一个表来处理，表长度即为整个序列的长度
 */

/**
 * Time complexity: O(n^2) - O(n^1.3)
 * @param {number[]} nums
 */
const shellSort = function (nums) {
	let gap = Math.floor(nums.length / 2);
	while (gap > 0) {
		for (let i = gap; i < nums.length; i++) {
			// 这里相当于插入排序，找到最终的位置才插入，即是交换
			let j = i;
			let temp = nums[i];
			for (; nums[j - gap] > temp; j -= gap) {
				nums[j] = nums[j - gap];
			}
			nums[j] = temp;

			// 每次比较成功的都交换
			// for (let j = i; nums[j - gap] > nums[j]; j -= gap) {
			// 	let temp = nums[j];
			// 	nums[j] = nums[j - gap];
			// 	nums[j - gap] = temp;
			// }
		}
		gap = Math.floor(gap / 2);
	}
	return nums;
};

let arr = [1, 5, 7, 8, 2, 3, 4, 6, 9, 10];
console.log(shellSort(arr));
