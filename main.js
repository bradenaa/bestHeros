import findBest from './findBest.js'
import data from './data.js'

console.log(findBest(data));


function subtract(a, b) {
  return a - b;
}
function add(a, b) {
  return a + b;
}

console.log(subtract(3, 2))
console.log(subtract({}, 2))
console.log(subtract('3', 2))
console.log(add('3', 2))
console.log(add(3, '2'))