const utils = require('./utils')

export default (data) => {

  let result = {
    'Leader': [],
    'Tank': [],
    'Melee': [],
    'Distance': [],
    'Total': 0
  }

  data.heroData.forEach((hero) => {
    // get the data structure back from each here
    const heroObj = utils.findMaxAndReturnObject(hero);

    result = utils.updateResult(result, heroObj)

    result.Total = utils.calculateScore(result);

  });

  return result
}