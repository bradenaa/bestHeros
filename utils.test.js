const utils = require('./utils');

test('add 1 + 2 to equal 3', () => {
  expect(utils.add(1, 2)).toBe(3)
});

test('subtract 3 - 1 to equal 2', () => {
  expect(utils.subtract(3, 1)).toBe(2)
});

test('expect the score to equal 1061', () => {
  const testingObj = {
    Leader: [{ name: 'Captain America', type: 'Leader', score: 190 }],
    Tank: [{ name: 'Chang', type: 'Tank', score: 128 }],
    Melee:
      [{ name: 'Joel', type: 'Melee', score: 149 },
      { name: 'Byron', type: 'Melee', score: 173 }],
    Distance:
      [{ name: 'Melody', type: 'Distance', score: 187 },
      { name: 'Carolyn', type: 'Distance', score: 234 }],
    Total: 0
  };

  expect(utils.calculateScore(testingObj)).toBe(1061)

})
