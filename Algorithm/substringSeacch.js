/**
 * 字符串模式匹配
 * 朴素的算法和kmp算法的时间复杂度差不多，故朴素的算法还是经常应用的
 */

/**
 * 朴素的模式匹配
 * Time complexity: O(m*n)
 * Space complexity: O(1)
 * @param {string} str
 * @param {string} pattern
 */
const substringSearch = function (str, pattern) {
	let i = 0,
		j = 0;

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
		for (let i = 0, j = 1; i < pat.length && j < pat.length; ) {
			if (pat[i] === pat[j]) {
				// 匹配的情况下，表示 i 前面的都是匹配的了，故为 i + 1
				table[j] = i + 1;
				j++;
				i++;
			} else {
				// 不匹配的情况下，当 i != 0 时，i 又从 i - 1 位置的 table 值开始
				if (i !== 0) {
					i = table[i - 1];
				} else {
					// i == 0 时，表示又从头开始了
					table[j] = 0;
					j++;
				}
			}
		}
		return table;
	};
	next = getNext(pattern);

	console.log(`KMP的next数组：`, next);

	let i = 0,
		j = 0;
	while (i < str.length && j < pattern.length) {
		if (str[i] === pattern[j]) {
			i++;
			j++;
		} else {
			if (j !== 0) {
				j = next[j - 1];
			} else {
				// 进入这一步时，j 必然已为0， i所在的字符已与j=0的字符已经匹配比较过
				i++;
				// j = 0;
			}
		}
	}

	console.log(`i = ${i}, j = ${j}`);
	if (j >= pattern.length) {
		return i - j;
	} else {
		return -1;
	}
};

let p = 'abcac'; //'dsgwadsgzds'
let s = 'ababcabcacbab';

console.log(`=============朴素的算法=============`);
console.time();
console.log(substringSearch(s, p));
console.timeEnd();

console.log(`=============kmp算法=============`);
console.time();
console.log(`KMP算法匹配位置（-1为不匹配）：`, kmpSearch(s, p));
console.timeEnd();
