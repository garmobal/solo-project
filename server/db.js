const mongoose = require('mongoose');

const db = {};

const dbHost = process.env.DB_HOST || 'mongodb://localhost';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'learntoday';

const url = `${dbHost}:${dbPort}/${dbName}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
db.conn = mongoose;

module.exports = db;
