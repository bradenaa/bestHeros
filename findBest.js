import heroTypes from './heroTypes.js'

export default (data) => {

  const result = {
    'Leader': [],
    'Tank': [],
    'Melee': [],
    'Distance': [],
    'Total': 0
  }

  data.heroData.forEach((hero) => {
    // get the data structure back from each here
    const heroObj = findMaxAndReturnObject(hero);


    if (heroObj.type === 'Leader') {
      if (result.Leader.length === 0) result.Leader.push(heroObj);
      else {
        // check if current lead has a higher score, do nothing
        if (result.Leader[0].score < heroObj.score) result.Leader[0] = heroObj;
      }
    } else if (heroObj.type === 'Tank') {
      if (result.Tank.length === 0) result.Tank.push(heroObj);
      else {
        // check if current Tank has a higher score, do nothing
        if (result.Tank[0].score < heroObj.score) result.Tank[0] = heroObj;
      }
    } else if (heroObj.type === 'Melee') {
      if (result.Melee.length < 2) result.Melee.push(heroObj);

      else {
        result.Melee.sort((a, b) => a.score - b.score);
        if (heroObj.score > result.Melee[0].score) {
          if (heroObj.score > result.Melee[1].score) {
            result.Melee.shift()
            result.Melee.push(heroObj)
          } else {
            resul.Melee[0] = heroObj
          }
        }
      }

    } else if (heroObj.type === 'Distance') {
      if (result.Distance.length < 2) result.Distance.push(heroObj);

      else {
        result.Distance.sort((a, b) => a.score - b.score);
        if (heroObj.score > result.Distance[0].score) {
          if (heroObj.score > result.Distance[1].score) {
            result.Distance.shift()
            result.Distance.push(heroObj)
          } else {
            resul.Distance[0] = heroObj
          }
        }
      }
    }

    result.Total = calculateScore(result);

  });


  function calculateScore(result) {
    return Object.entries(result).reduce((acc, [name, heroType]) => {
      if (name !== 'Total') {
        const subtotal = heroType.reduce((acc, val) => {
          acc += val.score
          return acc;
        }, 0)
        acc += subtotal
      }
      return acc;
    }, 0)
  }

  function findMaxAndReturnObject(hero) {
    const heroName = hero['hero-name'];
    const heroType = hero['hero-stats']['heroType']
    const totalScore = Object.entries(hero['hero-stats']).reduce((acc, [name, value]) => {
      if (heroTypes.hasOwnProperty(name)) {
        acc += (heroTypes[name] * value)
      }
      return acc;
    }, 0)
    return {
      name: heroName,
      type: heroType,
      score: totalScore
    }
  }

  return result
}