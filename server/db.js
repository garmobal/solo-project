const mongoose = require('mongoose');
const config = require('./config');

const db = {};

const url = `${config.dbHost}:${config.dbPort}/${config.dbName}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
db.conn = mongoose;

module.exports = db;
