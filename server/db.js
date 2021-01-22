const mongoose = require('mongoose');

const db = {};

let url;
if (process.env.JEST_WORKER_ID !== undefined) {
  url = 'mongodb://localhost:27017/learntoday-test';
} else {
  url = 'mongodb://localhost:27017/learntoday';
}

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
db.conn = mongoose;

module.exports = db;
