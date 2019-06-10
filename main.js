import findBest from './findBest.js'
import data from './data.js'
import utils from './utils'

console.log(findBest(data));


console.log(utils.subtract(3, 2))
console.log(utils.subtract({}, 2))
console.log(utils.subtract('3', 2))
console.log(utils.add('3', 2))
console.log(utils.add(3, '2'))

console.log(utils.subtract('2', 2))
