// Helper functions
const hideAnswers = (testObj) => {
  testObj.questions = testObj.questions.map((q) => {
    q.options = q.options.map((opt) => opt.op);
    q.answer = '';
    return q;
  });
  return testObj;
};

const validateAnswer = (test, qid, answer) => {
  for (let q of test.questions) {
    if (q._id == qid && q.answer === answer) return true;
  }
  return false;
};

module.exports = { hideAnswers, validateAnswer };
