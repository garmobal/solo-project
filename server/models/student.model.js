const mongoose = require('mongoose');

const db = require('../db');

const TestSchema = mongoose.Schema({
  name: { type: String, required: true },
  pendingtests: { type: [], required: true, default: [] },
  completedtests: {
    type: [
      {
        id: String,
        title: String,
        result: {
          percentage: Number,
          questions: [
            {
              question: String,
              id: String,
              option: String,
              correct: Boolean,
            },
          ],
        },
      },
    ],
    default: [],
  },
  classes: { type: [String], required: true, default: [] },
});

const student = db.conn.model('student', TestSchema);

module.exports = student;
