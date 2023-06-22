/**********************************************************************************
 * VARIABLES
 * There are 4 ways of creating variables
 * 1.  =  - create variable without keyword example (newVariable = 'test here')
 * 2. var - will always create a global unless declared within a function
 * 				- could be re-declared and re-assigned
 * 				- will always hoist up, basically could be used before declared
 * 3. let - will always available only within the scope {}
 * 				- could be re-assigned but not re-declared
 * 				- will not hoist back up
 * 4. const - to always be used unless variable will need to be reassigned
 * 					- will not hoist back up
 * 
 * good article to read in regards: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
 * 
 */

myNewestVariable = 'not optimal'
myNewestVariable = 123455
// console.log(myNewestVariable)

var myVar = 'also not optimal'
myVar = 787878787878
// console.log(myVar)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let myLetVar = 'good use'
myLetVar = 9879869878976
// console.log(myLetVar)

const myConstVar = 'best to use'
// myConstVar = 9780980809
// console.log(myConstVar)

let thisMynewGlobalVar = 'this is a global variable'

if (true === true) {
	// var checkThis = 'test this out' // this becomes a GLOBAL variable
	let checkThis = 'test this out' // only avaialble in scope
  // checkThis = 708089
  // console.log(checkThis)
}

checkThis = 697987987987 // creating a new variable



