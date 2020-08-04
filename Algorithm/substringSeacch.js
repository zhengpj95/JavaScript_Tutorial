/**
 * 字符串模式匹配
 */

/**
 * 朴素的模式匹配
 * Time complexity: O(m*n)
 * @param {string} str 
 * @param {string} pattern 
 */
const substringSearch = function (str, pattern) {
	let i = 0, j = 0;

	while (i < str.length && j < pattern.length) {
		if (str[i] === pattern[j]) {
			++i;
			++j;
		} else {
			// 重新开始匹配的位置
			i = i - j + 1;
			j = 0;
		}
	}

	if (j > pattern.length - 1) {
		return i - pattern.length;
	} else {
		return -1;
	}
};

let p = 'abcac';
let s = 'ababcabcacbab';
console.time();
console.log(substringSearch(s, p));
console.timeEnd();