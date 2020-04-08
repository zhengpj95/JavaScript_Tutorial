var myClass;
(function (clazz) {
	console.log(clazz);
	work = function () {
		console.log('work')
	}
	clazz.name = 'myClass.name';

	clazz.work = work;
})(myClass || (myClass = {}));

myClass.work()
console.log(myClass);