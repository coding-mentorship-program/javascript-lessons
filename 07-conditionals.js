/***
 * CONDITIONALS
 * - if
 * - if else
 * - Ternary - when assigning new variable depending on a condition
 * - Switch
 * - Template literals = ${}
 */

const age = 20

// if (age >= 21) {
// 	console.log('let in the club')
// } else {
// 	console.log('not allowed in 😭')
// }

// if (age === 20) console.log('one more year to enter')

/****
 * Ternary
 */

// age >= 21 ? console.log('let in the club') : age === 20 ? console.log('not allowed in') : console.log('welcome in ') // we dont want to use these embeded conditionals
// age >= 21 ? console.log('let in the club') : console.log('welcome in ')

const date = new Date()
const hours = date.getHours()

// console.log(hours)

const greeting = hours >= 12 ? 'good afternoon' : 'good morning'
// console.log(greeting, 'mr. Smith')

const firstName = 'Jon'
const lastName = 'Sanchez'
const middleName = `none`
const newGreeting = `hi mr. firstname ->  ${firstName} middle name  ${middleName} - ${lastName}`
const properGreeting = `hi mr. ${lastName}, good ${hours >= 12 ? 'afternoon' : 'morning'}`

console.log(properGreeting)

/***
 * Switch
 */

const fruit = 'pineapple'

switch (fruit) {
	case 'orange':
		console.log('Oranges are $.59 a pound')
		break
	case 'apple':
		console.log('Apples are free')
		break
	default:
		console.log("sorry we don't have those items here")
}
