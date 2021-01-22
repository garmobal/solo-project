module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.css$': require.resolve('./__tests__/style-mock'),
    '\\.scss$': require.resolve('./__tests__/style-mock'),
  },
};
