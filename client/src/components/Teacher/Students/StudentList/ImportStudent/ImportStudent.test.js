const setSs = require('./ImportStudent')

test('returns an array if given an array', () => {
  expect(setSs(['sarah', 'tom']).toEqual(['sarah', 'tom']))
})