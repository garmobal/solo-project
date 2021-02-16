const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  port: process.env.PORT || 3002,
  host: process.env.HOST || 'localhost',
  dbHost: process.env.DB_HOST || 'mongodb://localhost',
  dbPort: process.env.DB_PORT || 27017,
  dbName: isTest ? process.env.DB_NAME_TEST : process.env.DB_NAME,
};
