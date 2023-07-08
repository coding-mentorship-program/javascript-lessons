/***
 * FUNCTIONS or FUN-ctions
 * - they always do something
 * - or return something
 */

function ageCalculation(age) {
	// console.log(2023 - age)
	// return 2023 - age
}

const birthyear = ageCalculation(42)
// console.log(`this is the year I was born ${ageCalculation(56)}`)

// anonymous function

const myNamelessFunc = function () {
	console.log(' cannot run me')
}
// myNamelessFunc()

// Arrow functions
// ES6 way

// const myArrowFunc = () => {
// 	console.log(' Im an arrow function')
// }

const myArrowFunc = () => console.log(' Im an arrow function')
// myArrowFunc()

/****
 * Arrow func practice
 */

let firstNum 

// write function to calculate taxes
const calculateTaxes = (price) => {
  console.log(price * 0.07 + price) // doing something internally

  const result = price * 0.07 + price
  // firstNum = result

	return result // im sending the result outside
}

console.log(result)

const totalPrice = calculateTaxes(20000) // here is returning the calculation
console.log('totalPrice->', totalPrice - 2000)


