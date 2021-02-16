const testAnswersMiddleware = require('./../middleware/test.answers');

describe('testAnswersMiddleware', () => {
  it('should post students', () => {
    const spy = jest.fn();
    const req = {
      body: {
        learner: true,
        testid: 3,
      },
    };

    testAnswersMiddleware(req, undefined, spy);
    expect(spy).toHaveBeenCalledTimes(1);
    req.session[req.body.testid] = 'test';
    testAnswersMiddleware(req, undefined, spy);
    expect(req.test).toBe(req.session[req.body.testid]);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
