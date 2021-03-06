/**
 * write function that will do sum for two numbers
 *
 */
function sum(a, b) {
	return a + b;
}

/**
 * write function that return first and last name of a given object
 * properties are firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {
	return object["firstName"] + " " + object["lastName"]
}

/**
 * write function that checks if number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	return result = (n % 2 == 0) ? false : true;
}

/**
 * write function that return shortest of words in the given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {
	return wordArray.reduce((a, b) => a.length <= b.length ? a : b);;
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {
	return "g" + "o".repeat(n) +  "gle";
}

/**
 * write function that returns object based on the given information 
 * (params may be null, so, please use default params)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName = null, lastName = null, age = null) {
	return {
		firstName: firstName,
		lastName: lastName,
		age: age,
	}
}

/**
 * write function that calculates total path traveled.
 * path represented as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {
	let distance = 0;
	path.forEach(path => distance +=path["distance"]);
	return distance;
}

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {percentage} num
 * @param {amount} num
 * e.g const discount10 = discountFunction(10);
 * discount10(90) should return 81
 * discount10(100) should return 90
 */

function discountFunction(percentage) {
	let numbers = [];
	numbers.push(percentage);

	const discount = numbers[0];
	const amount = (numbers.length > 1) ? numbers[numbers.length - 1] : 0;

	return function (amount) {
		return amount * (100 - discount) / 100;
	};
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		//write your code here
		Object.keys(myObject).forEach(key => console.log(key));
	},
	call() {
		//write your code here
    return "My name is " + this.name + " " + this.lastName + " and I am " + this.age + " years old. My best friend is " + this.friends[2];    
	}
};

module.exports = {
	sum,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};
