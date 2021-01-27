const mockTests = {
  valid: {
    assignedto: [],
    finishedby: [],
    questions: [
      {
        options: [
          { op: '1', correct: true },
          { op: '2', correct: false },
          { op: '3', correct: false },
          { op: '4', correct: false },
        ],
        question: 'How much',
        answer: '1',
      },
      {
        options: [
          { op: '1', correct: false },
          { op: '2', correct: false },
          { op: '3', correct: true },
          { op: '4', correct: false },
        ],
        question: 'How many',
        answer: '3',
      },
      {
        options: [
          { op: '1', correct: false },
          { op: '2', correct: true },
          { op: '3', correct: false },
          { op: '4', correct: false },
        ],
        question: 'How to',
        answer: '2',
      },
      {
        options: [
          { op: '1', correct: false },
          { op: '2', correct: false },
          { op: '3', correct: false },
          { op: '4', correct: true },
        ],
        question: 'Howard',
        answer: '4',
      },
    ],
    title: 'another test',
    testtype: 'Syllable quiz',
  },
  noTitle: {
    assignedto: [],
    finishedby: [],
    questions: [
      {
        options: [
          { op: '1', correct: true },
          { op: '2', correct: false },
          { op: '3', correct: false },
          { op: '4', correct: false },
        ],
        question: 'How much',
        answer: '1',
      },
      {
        options: [
          { op: '1', correct: false },
          { op: '2', correct: false },
          { op: '3', correct: true },
          { op: '4', correct: false },
        ],
        question: 'How many',
        answer: '3',
      },
      {
        options: [
          { op: '1', correct: false },
          { op: '2', correct: true },
          { op: '3', correct: false },
          { op: '4', correct: false },
        ],
        question: 'How to',
        answer: '2',
      },
      {
        options: [
          { op: '1', correct: false },
          { op: '2', correct: false },
          { op: '3', correct: false },
          { op: '4', correct: true },
        ],
        question: 'Howard',
        answer: '4',
      },
    ],
    title: '',
    testtype: 'Syllable quiz',
  },
  noTestType: {
    assignedto: [],
    finishedby: [],
    questions: [
      {
        options: [
          { op: '1', correct: true },
          { op: '2', correct: false },
          { op: '3', correct: false },
          { op: '4', correct: false },
        ],
        question: 'How much',
        answer: '1',
      },
      {
        options: [
          { op: '1', correct: false },
          { op: '2', correct: false },
          { op: '3', correct: true },
          { op: '4', correct: false },
        ],
        question: 'How many',
        answer: '3',
      },
      {
        options: [
          { op: '1', correct: false },
          { op: '2', correct: true },
          { op: '3', correct: false },
          { op: '4', correct: false },
        ],
        question: 'How to',
        answer: '2',
      },
      {
        options: [
          { op: '1', correct: false },
          { op: '2', correct: false },
          { op: '3', correct: false },
          { op: '4', correct: true },
        ],
        question: 'Howard',
        answer: '4',
      },
    ],
    title: 'another test',
    testtype: '',
  },
};

const mockStudent = [{ name: 'Peter' }];
const mockStudents = [{ name: 'Peter' }, { name: 'Francesco' }];

const mockTestWithIds = {
  questions: [
    {
      options: [
        { op: '1', correct: true },
        { op: '2', correct: false },
        { op: '3', correct: false },
        { op: '4', correct: false },
      ],
      question: 'How much',
      answer: '1',
      _id: '1',
    },
    {
      options: [
        { op: '1', correct: false },
        { op: '2', correct: false },
        { op: '3', correct: true },
        { op: '4', correct: false },
      ],
      question: 'How many',
      answer: '3',
      _id: '2',
    },
    {
      options: [
        { op: '1', correct: false },
        { op: '2', correct: true },
        { op: '3', correct: false },
        { op: '4', correct: false },
      ],
      question: 'How to',
      answer: '2',
      _id: '3',
    },
    {
      options: [
        { op: '1', correct: false },
        { op: '2', correct: false },
        { op: '3', correct: false },
        { op: '4', correct: true },
      ],
      question: 'Howard',
      answer: '4',
      _id: '4',
    },
  ],
  title: 'another test',
  testtype: 'Syllable quiz',
};

module.exports = { mockTests, mockStudent, mockStudents, mockTestWithIds };
