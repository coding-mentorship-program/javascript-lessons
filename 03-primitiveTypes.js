/**********************************************************************************
 * PRIMITIVE TYPES
 * - Number
 * - String
 * - Boolean
 *
 * - use typeof in front to tell what type of data it is
 */

const firstName = 'Jon'
// console.log(typeof firstName)

const age = 34
// console.log('age ->', age, 'is a', typeof age)

const awesome = false
// console.log('is awesome', awesome, 'is a', typeof awesome)

/**********************************************************************************
 * SPECIAL CASES
 * - null
 * - undefined
 * - NaN
 * - Infinity
 */

let myNewVariable // undefined
// console.log(myNewVariable)

myNewVariable = 'hey there' // is defined
// console.log(myNewVariable)

let myNullVar = null
// console.log(myNullVar)

let myNaNVar = 365 + 'my name is' // js is converting everything to a string
// the + is an addition, contactenator
// console.log(typeof myNaNVar)

let myTrueNaNVar = 365 * 'my old name is' // not a number
// console.log(myTrueNaNVar)