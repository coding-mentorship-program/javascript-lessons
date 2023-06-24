/******
 * OBJECTS
 * 
 * 
 */

// this object comes from a database
const car = {
  brand: 'GMC',
  year: 2016,
  engine: 'v8',
  color: 'Blue'
}

console.log(car.brand) // GMC 
console.log(car)

car.transmission = 'automatic'
car.seats = 'leather'
car.brand = 'nissan'

// car = [] // you cannot reassign

console.log(car)

function myTestFunction(){
  // here is body of function
  car.wheels = 'Metal'
  console.log(car)
}

myTestFunction()


