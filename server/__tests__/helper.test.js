const { validateAnswer, hideAnswers } = require('../controller/helper');

const { mockTestWithIds } = require('../mocks/mocks');

describe('hide answers', () => {
  it('should return true if the answer is correct', () => {
    const testCopy = JSON.parse(JSON.stringify(mockTestWithIds));
    hideAnswers(mockTestWithIds);
    expect(testCopy.questions[0].answer).not.toBe(
      mockTestWithIds.questions[0].answer
    );
    expect(testCopy.questions[1].answer).not.toBe(
      mockTestWithIds.questions[1].answer
    );
    expect(testCopy.questions[2].answer).not.toBe(
      mockTestWithIds.questions[2].answer
    );
    expect(testCopy.questions[3].answer).not.toBe(
      mockTestWithIds.questions[3].answer
    );
    expect(mockTestWithIds.questions[0].answer).toBe('');
    expect(mockTestWithIds.questions[1].answer).toBe('');
    expect(mockTestWithIds.questions[2].answer).toBe('');
    expect(mockTestWithIds.questions[3].answer).toBe('');
    expect(testCopy.questions[0].options).not.toEqual(
      mockTestWithIds.questions[0].options
    );
    expect(testCopy.questions[0].options[0].op).toBe(
      mockTestWithIds.questions[0].options[0]
    );
    expect(testCopy.questions[0].options[1].op).toBe(
      mockTestWithIds.questions[0].options[1]
    );
    expect(testCopy.questions[0].options[2].op).toBe(
      mockTestWithIds.questions[0].options[2]
    );
    expect(testCopy.questions[0].options[3].op).toBe(
      mockTestWithIds.questions[0].options[3]
    );
  });
});

describe('validate answer', () => {
  it('should return true if the answer is correct', () => {
    const result1 = validateAnswer(
      mockTestWithIds,
      mockTestWithIds.questions[0]._id,
      mockTestWithIds.questions[0].answer
    );
    expect(result1).toBe(true);
    const result2 = validateAnswer(
      mockTestWithIds,
      mockTestWithIds.questions[1]._id,
      mockTestWithIds.questions[1].answer
    );
    expect(result2).toBe(true);
    const result3 = validateAnswer(
      mockTestWithIds,
      mockTestWithIds.questions[2]._id,
      mockTestWithIds.questions[2].answer
    );
    expect(result3).toBe(true);
    const result4 = validateAnswer(
      mockTestWithIds,
      mockTestWithIds.questions[3]._id,
      mockTestWithIds.questions[3].answer
    );
    expect(result4).toBe(true);
  });

  it('should return false if the answer is wrong', () => {
    const result1 = validateAnswer(
      mockTestWithIds,
      mockTestWithIds.questions[0]._id,
      null
    );
    expect(result1).toBe(false);
    const result2 = validateAnswer(
      mockTestWithIds,
      mockTestWithIds.questions[1]._id,
      null
    );
    expect(result2).toBe(false);
    const result3 = validateAnswer(
      mockTestWithIds,
      mockTestWithIds.questions[2]._id,
      null
    );
    expect(result3).toBe(false);
    const result4 = validateAnswer(
      mockTestWithIds,
      mockTestWithIds.questions[3]._id,
      null
    );
    expect(result4).toBe(false);
  });
});
