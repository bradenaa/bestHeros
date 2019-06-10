const heroTypes = require('./heroTypes')

const utils = {}

utils.subtract = (a, b) => {

  return a - b;
}

utils.add = (a, b) => {

  return a + b;
}



utils.calculateScore = (result) => {
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
};

utils.findMaxAndReturnObject = (hero) => {
  const heroName = hero['hero-name'];
  const heroType = hero['hero-stats']['heroType'];
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

utils.updateResult = (result, heroObj) => {
  const { Leader, Tank, Melee, Distance, Total } = result;
  const { name, type, score } = heroObj;


  if (type === 'Leader') {
    if (Leader.length === 0) Leader.push(heroObj);
    else {
      // check if current lead has a higher score, do nothing
      if (Leader[0].score < score) Leader[0] = heroObj;
    }
  } else if (type === 'Tank') {
    if (Tank.length === 0) Tank.push(heroObj);
    else {
      // check if current Tank has a higher score, do nothing
      if (Tank[0].score < score) Tank[0] = heroObj;
    }
  } else if (type === 'Melee') {

    if (Melee.length < 2) Melee.push(heroObj);

    else {
      Melee.sort((a, b) => a.score - b.score);
      if (score > Melee[0].score) {
        if (score > Melee[1].score) {
          Melee.shift()
          Melee.push(heroObj)
        } else {
          Melee[0] = heroObj
        }
      }
    }

  } else if (type === 'Distance') {
    if (Distance.length < 2) Distance.push(heroObj);

    else {
      Distance.sort((a, b) => a.score - b.score);
      if (score > Distance[0].score) {
        if (score > Distance[1].score) {
          Distance.shift()
          Distance.push(heroObj)
        } else {
          Distance[0] = heroObj
        }
      }
    }
  }

  return {
    Leader,
    Tank,
    Melee,
    Distance,
    Total
  };
}

module.exports = utils