/**
 * 二分查找（折半查找）
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
const binarySearch = function (nums, target) {
	let len = nums.length;
	if (len == 0) {
		return -1;
	}

	let low = 0;
	let high = len - 1;

	while (low <= high) {
		let mid = Math.floor((low + high + 1) / 2);
		let temp = nums[mid];

		if (temp == target) {
			return mid;
		}

		if (temp < target) {
			low = mid + 1;
		} else if (temp > target) {
			high = mid - 1;
		}
	}
	return -1;
};

console.log(binarySearch([11, 1, 2, 3, 4, 5], 1));
