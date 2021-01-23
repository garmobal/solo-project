const mockTests = {
  valid: {
    assignedto: ["franki"],
    finishedby: [],
    questions: [
      {
        options: [
          { op: "1", correct: true },
          { op: "2", correct: false },
          { op: "3", correct: false },
          { op: "4", correct: false },
        ],
        question: "How much",
        answer: "1",
      },
      {
        options: [
          { op: "1", correct: false },
          { op: "2", correct: false },
          { op: "3", correct: true },
          { op: "4", correct: false },
        ],
        question: "How many",
        answer: "3",
      },
      {
        options: [
          { op: "1", correct: false },
          { op: "2", correct: true },
          { op: "3", correct: false },
          { op: "4", correct: false },
        ],
        question: "How to",
        answer: "2",
      },
      {
        options: [
          { op: "1", correct: false },
          { op: "2", correct: false },
          { op: "3", correct: false },
          { op: "4", correct: true },
        ],
        question: "Howard",
        answer: "4",
      },
    ],
    title: "another test",
    testtype: "Syllable quiz",
  },
  threeQuestions: {
    assignedto: ["franki"],
    finishedby: [],
    questions: [
      {
        options: [
          { op: "1", correct: true },
          { op: "2", correct: false },
          { op: "3", correct: false },
          { op: "4", correct: false },
        ],
        question: "How much",
        answer: "1",
      },
      {
        options: [
          { op: "1", correct: false },
          { op: "2", correct: false },
          { op: "3", correct: true },
          { op: "4", correct: false },
        ],
        question: "How many",
        answer: "3",
      },
      {
        options: [
          { op: "1", correct: false },
          { op: "2", correct: true },
          { op: "3", correct: false },
          { op: "4", correct: false },
        ],
        question: "How to",
        answer: "2",
      },
      {
        options: [
          { op: "1", correct: false },
          { op: "2", correct: false },
          { op: "3", correct: false },
          { op: "4", correct: true },
        ],
        question: "Howard",
        answer: "4",
      },
    ],
    title: "another test",
    testtype: "Syllable quiz",
  },
};

module.exports = { mockTests };
