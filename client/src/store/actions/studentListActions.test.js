const fetchStudent = require ('./studentListActions');

test('returns array if given array', () => {
  expect(fetchStudent(['Sara Gómez'])).toEqual(['Sara Gómez'])
})