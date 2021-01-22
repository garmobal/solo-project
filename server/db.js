const mongoose = require('mongoose');

const db = {};

if (process.env.JEST_WORKER_ID !== undefined) {
  const url = 'mongodb://localhost:27017/learntoday-test';
} else {
  const url = 'mongodb://localhost:27017/learntoday';
}

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
db.conn = mongoose;

module.exports = db;
