const { validateAnswer } = require('../controller/helper');

const { mockTestWithIds } = require('../mocks/mocks');

describe('validate answer', () => {
  it('should return true if the answer is correct', () => {
    const result = validateAnswer(
      mockTestWithIds,
      mockTestWithIds.questions[0]._id,
      mockTestWithIds.questions[0].answer
    );
    expect(result).toBe(true);
  });
});
