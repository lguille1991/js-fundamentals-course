//Testing array filtering

const foods = ['Apples', 'Eggs', 'Milk', 'Bread'];

// Store the resulting array in a variable
let myNewArray = foods.filter(element => element.length < 5);
console.log(`Values in my resulting array: ${myNewArray}`)

// Using a console.log()
console.log(foods.filter(element => element.length < 5))

// Directly
foods.filter(element => element.length < 5)
  .forEach(element => console.log(`Size of element ${element} is ${element.length}`));