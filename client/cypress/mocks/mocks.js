const mockTest = {
  assignedto: [],
  finishedby: [],
  qs: [
    {
      ops: [
        { op: 'yes', correct: true },
        { op: 'no', correct: false },
        { op: 'maybe', correct: false },
        { op: 'i dont know', correct: false },
      ],
      question: 'Cheese',
      answer: '1',
    },
    {
      ops: [
        { op: '1', correct: false },
        { op: '2', correct: false },
        { op: '3', correct: true },
        { op: '4', correct: false },
      ],
      question: 'How many',
      answer: '3',
    },
    {
      ops: [
        { op: 'legs', correct: false },
        { op: 'arms', correct: true },
        { op: 'hand', correct: false },
        { op: '2 feet', correct: false },
      ],
      question: 'How to ski',
      answer: '2',
    },
    {
      ops: [
        { op: 'some guy', correct: false },
        { op: 'some women', correct: false },
        { op: 'non-binary', correct: false },
        { op: 'me', correct: true },
      ],
      question: 'Who Howards',
      answer: '4',
    },
  ],
  title: 'another test',
  testtype: 'Syllable quiz',
};

module.exports = mockTest;
