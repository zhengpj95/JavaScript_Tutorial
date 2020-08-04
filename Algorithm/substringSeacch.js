/**
 * 字符串模式匹配
 */

/**
 * 朴素的模式匹配
 * Time complexity: O(m*n)
 * Space complexity: O(1)
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

/**
 * KMP算法
 * Time complexity: O(m+n)  m: str.length, n: pattern.length
 * Space complexity: O(n)	n: pattern.length
 * @param {string} str 
 * @param {string} pattern 
 */
const kmpSearch = function (str, pattern) {
	// next 数组
	let next = [];
	let getNext = (pat) => {
		let table = [0];
		for (let i = 0, j = 1; i < pat.length && j < pat.length;) {
			if (pat[i] == pat[j]) {
				table[j] = table[j - 1] + 1;
				j++;
				i++;
			} else {
				table[j] = 0;
				j++;
				i = 0;
			}
		}
		return table;
	};
	next = getNext(pattern);

	console.log(next);
};

let p = 'abcac'; //'dsgwadsgzds'
let s = 'ababcabcacbab';
console.time();
console.log(substringSearch(s, p));
console.timeEnd();

kmpSearch(s, 'dsgwadsgz');