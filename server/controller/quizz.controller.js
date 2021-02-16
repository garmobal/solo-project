const test = require('../models/test.model');
const { hideAnswers, validateAnswer } = require('./helper');

const checkAnswer = async (req, res) => {
  const { testid, answer, qid } = req.body;
  let currentTest;

  if (req.session) {
    // Fetch whole test from mongoose
    try {
      currentTest = await test.findOne({ _id: testid });
    } catch (e) {
      res.status(500);
      res.send(e);
    }
    req.session[testid] = currentTest;
  }
  if (req.test) {
    currentTest = req.test;
  }

  res.send(validateAnswer(currentTest, qid, answer));
};

// Return quizz (no answers)
const getQuizz = async (req, res) => {
  try {
    const currentTest = await test.findOne({ _id: req.params.id });
    const quizz = hideAnswers(currentTest);
    res.send(quizz);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
};

module.exports = { getQuizz, checkAnswer };
