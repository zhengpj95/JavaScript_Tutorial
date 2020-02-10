const log = {};

log.levels = {
	DEBUG: Symbol.for('debug'),
	INFO: Symbol('info'),
	WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message'); //Symbol(debug) debug message
console.log(log.levels.INFO, 'info message');	//Symbol(info) info message

console.log(log.levels.INFO == Symbol('info'));	//false，symbol独一无二
console.log(log.levels.DEBUG === Symbol.for('debug')); //true，用 Symbol.for(key) 会先判断key是否存在
console.log(log.levels.DEBUG === Symbol('debug')); //false

console.log(Symbol.keyFor(log.levels.DEBUG)); //debug，返回一个已经使用Symbol.for()登记的值，否则undefined
console.log(Symbol.keyFor(log.levels.INFO))	//undefined
