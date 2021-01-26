const fetchStudent = require('./studentListActions.ts');

test('returns array if given array', () => {
  expect(fetchStudent(['Sara Gómez'])).toEqual(['Sara Gómez']);
});
