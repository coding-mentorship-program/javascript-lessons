/****
 * OBJECTS
 * Objects are way to store and manage data, for example when a variable needs more properties
 * 
 * To create an object use the {} then add the properties like {propertyName: 'value here'}
 * 
 */

const person1 = {
	name: 'Jon',
	lname: 'Sanchez',
	age: 42,
	job: 'Software Engineer',
	family: {
		pet: 'Cielo',
		kid1: {
			name: 'Mia',
			age: 15,
			driving: true,
		},
		kid2: {
			name: 'Annalee',
			age: 12,
			driving: false,
		},
		wife: 'Claudia',
	},
	vehicle: {
		brand: 'GMC',
		year: '2016',
		turnOn: function () {
			const logic = 'key turn ' + 'Starter' + 'battery'
			console.log(`turn on car with ${logic}`)
		},
	},
}

/***
 * There are two ways of accessing objects properties and values
 * 1. via dot notation object.property
 * 
 *  */

// return full name of person parent of kids
function getFullNameAndKidsNames(obj) {
	const fullName = obj.name + ' ' + obj.lname
	const kids = obj.family.kid1.name + ' ' + '&' + ' ' + obj.family.kid2.name

	return console.log(`full name is ${fullName} and kids are ${kids}`)
}

getFullNameAndKidsNames(person1)


/******* HOMEWORK *****************/
// 1. Create function and return first name and if kid is driving or not

// 2. Create function to turn on car - homework


/**
 * 2. via bracket notation object['property']
 * 
 */

// create function to get age using bracket notation
function getAge(prs) {
	// const age = prs.age // dot notation

	const prop = 'grandkids' || 'onvaction' || 'legacyEmployee' || 'name'
	// imagine we have a dynamic string
	const personsAge = prs['age'] // 42
	const personsJob = prs['job'] // software engineer
	const fullName = prs[prop] + prs['lname']

	// return console.log(fullName, personsAge, personsJob)
}

getAge(person1)

// create function that deletes vehicle from object
function deleteVehicle(obj) {
	delete obj.vehicle // using dot notation
	delete obj['vehicle'] // using bracket notation

	return console.log(obj)
}

deleteVehicle(person1)

function addVehicle(obj) {
	obj.vehicle = {
		brand: 'GMC',
		year: '2016',
		turnOn: function () {
			const logic = 'key turn ' + 'Starter' + 'battery'
			console.log(`turn on car with ${logic}`)
		},
	}

	return console.log(obj)
}

addVehicle(person1)

/*****
 *
 *
 */

const store1 = {
	name: 'Walmart Hillsboro',
	revenue: 200000,
	employees: 150,
	liquor: true,
	manager: 'Mr. Walt',
}

// const employeeSize = store1.employees // dot notation
const employeeSize = store1['employees'] // bracket notation

const { employees, manager, revenue } = store1 // destructuring
// const { manager } = store1

console.log(employeeSize) // 150
console.log(employees) // 150

console.log(manager) // 'mr Walt'
console.log(revenue) // 200000

/************************** Real estate example ***********/


const property1 = {
	beds: 3,
	restrooms: 2,
	garage: true,
	lakeView: false,
	kitchen: {
		counterTop: 'Granite',
		dishwasher: true,
		refrigerator: '2 door',
		garbageDisposal: true,
	},
	yearsSold: ['1990', '2009', '2023'],
	calculatePropertyTaxes: function (price) {
		const totalTaxes = price * 0.02

		return console.log(
			`total taxes are ${totalTaxes} for this beautiful ${this.beds} / ${this.restrooms} with taxes of ${totalTaxes}`
		)
	},
}

// how get the number of beds and restrooms?
// console.log('the property has ', property1.beds, 'beds') // dot notation
// console.log('the property has ', property1['beds'], 'beds') // bracket notation

const restrooms = property1['restrooms'] // bracket notation

// property1.calculatePropertyTaxes(200000)

// create function to add a real estate agent to property object
function addRealtor(prop) {
	prop.realtor = 'Oscar Smith'

	return console.log(prop)
}

// addRealtor(property1)

// create function to delete years old property
function deleteYearsSold(prop) {
	delete prop.yearsSold
	return console.log(prop)
}

// deleteYearsSold(property1)

// create a function that creates a selling description
function createDescription(property) {
	// x is the entire property object

	// without destructuring
	// const beds = property.beds
	// const restrooms = property.restrooms
	// const lakeView = property.lakeView

	// with destructuring
	const { beds, restrooms, lakeView } = property

	return console.log(
		`don't miss out on this great property with ${beds} beds and ${restrooms} restrooms plus ${lakeView}`
	)
}

createDescription(property1)
