/**
 * 红点系统
 * 利用树的结构
 */
class RedPointSystem {
	constructor() {
		this.datas = {};
	}

	/**
	 * @param {number | boolean} value
	 * @param  {...any} params
	 */
	saveData(value, ...params) {}

	/**
	 * @param {boolean} value
	 * @param {any} obj
	 * @param {number} index
	 * @param {string[]} keyList
	 */
	write(value, obj, index, keyList) {}

	/**
	 * @param  {...any} params
	 * @returns {boolean}
	 */
	getData(...params) {}

	/**
	 * @param {any} obj
	 * @param {number} index
	 * @param {string[]} keyList
	 * @returns {boolean}
	 */
	read(obj, index, keyList) {}

	/**
	 * @param {any} obj
	 * @returns {boolean}
	 */
	getObjectValue(obj) {}

	/**
	 * @param {any} obj
	 * @returns {string}
	 */
	getObjectName(obj) {}
}
