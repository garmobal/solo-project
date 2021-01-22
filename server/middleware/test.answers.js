const session = {};

const testAnswersMiddleware = (req, _, next) => {
  if (req.body.learner) {
    if (session[req.body.testid]) {
      req.test = session[req.body.testid];
    } else {
      req.session = session;
    }
  }
  next();
};

module.exports = testAnswersMiddleware;
