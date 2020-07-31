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
	saveData(value, ...params) {
		let newValue = !!value; // convert to boolean

		if (params.length) {
			let keys = [];
			for (let i = 0; i < params.length; i++) {
				keys.push(this.getObjectName(params[i]));
			}
			this.write(newValue, this.datas, 0, keys);
		} else {
			console.log(`RedPointSystem.saveData 保存设置参数错误，至少需要一个参数`);
		}
	}

	/**
	 * @param {boolean} value
	 * @param {any} obj
	 * @param {number} index
	 * @param {string[]} keyList
	 */
	write(value, obj, index, keyList) {
		let key = keyList[index];

		if (index < keyList.length - 1) {
			if (!obj[key]) {
				obj[key] = {};
			} else if (typeof obj[key] != 'object') {
				obj[key] = {};
				console.log(keyList.slice(0, index + 1), `本层已设置为值，无法再设置下一层`);
			}
			this.write(value, obj[key], index + 1, keyList);
		} else {
			if (typeof obj[key] != 'object') {
				obj[key] = value;
			} else {
				console.log(keyList, `下层有值，不可设置`);
			}
		}
	}

	/**
	 * @param  {...any} params
	 * @returns {boolean}
	 */
	getData(...params) {
		let keys = [];
		if (params && params.length) {
			for (let i = 0; i < params.length; i++) {
				keys.push(this.getObjectName(params[i]));
			}
		}
		return this.read(this.datas, 0, keys);
	}

	/**
	 * @param {any} obj
	 * @param {number} index
	 * @param {string[]} keyList
	 * @returns {boolean}
	 */
	read(obj, index, keyList) {
		let key = keyList[index];
		if (index < keyList.length) {
			if (index < keyList.length - 1 && obj[key]) {
				// 未到查找位置，继续递归查找
				return this.read(obj[key], index + 1, keyList);
			} else {
				// 已到查找位置
				if (obj) {
					return this.getObjectValue(obj[key]);
				} else {
					return false;
				}
			}
		} else {
			return false;
		}
	}

	/**
	 * @param {any} obj
	 * @returns {boolean}
	 */
	getObjectValue(obj) {
		if (typeof obj === 'boolean') {
			return obj;
		} else if (typeof obj === 'object') {
			let result = false;
			for (let key in obj) {
				result = this.getObjectValue(obj[key]);
				if (result) {
					break;
				}
			}
			return result;
		} else {
			return false;
		}
	}

	/**
	 * @param {any} obj
	 * @returns {string}
	 */
	getObjectName(obj) {
		let result = '';
		if (typeof obj === 'number') {
			result = obj + '';
		} else if (typeof obj === 'string') {
			result = obj;
		} else if (typeof obj === 'function') {
			result = obj.name;
		} else if (typeof obj === 'object') {
			let prototype = obj.prototype ? obj.prototype : Object.getPrototypeOf(obj);
			if (prototype && prototype.name) {
				result = prototype.name;
			} else {
				let constructorStr = prototype.constructor.toString().trim();
				let idx = constructorStr.indexOf('(');
				result = constructorStr.substring(9, idx);
			}
		} else {
			console.log(`需要获取的对象类型错误 ${obj}`);
		}
		return result;
	}
}

let sys = new RedPointSystem();
sys.saveData(1, 'first', 'second', 'third', 1, 'aaa');
console.log(sys.getData('first', 'second', 'third', 1)); //true
console.log(sys.getData('first', 'second', 'third', 2)); //false
sys.saveData(false, 'first', 'second', 'newthird');
// sys.saveData(1, 'first', 'second', 'third', 1); //下层有值，不可设置
console.log(sys.datas);
console.log(sys.getData('first', 'second')); //true
console.log(sys.getData('first', 'second', 'newthird')); //false
