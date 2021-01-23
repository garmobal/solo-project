const { app } = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("POST test", () => {
  it("should post a test if the format is valid", async (done) => {
    const response = await request.post("/test").send(mockTest);
    expect(response.status).toBe(201);
    expect(response.body.assignedto[0]).toEqual(mockTest.assignedto[0]);
    expect(response.body.finishedby).toEqual(mockTest.finishedby);
    expect(response.body.testtype).toEqual(mockTest.testtype);
    expect(response.body.questions.length).toEqual(mockTest.questions.length);
    expect(response.body.title).toEqual(mockTest.title);
    done();
  }),
    it("should not post a test if it has less than than 4 questions", async (done) => {
      const invalidMockTest = mockTest;
      invalidMockTest.questions = invalidMockTest.questions.slice(0, 3);
      console.log(invalidMockTest.questions.slice(0, 2));
    });
});

describe("GET tests", () => {
  it("should get all tests", async (done) => {
    const response = await request.get("/test");
    const lastTestPos = response.body.length - 1;
    expect(response.status).toBe(200);
    expect(response.body[lastTestPos].assignedto[0]).toEqual(
      mockTest.assignedto[0]
    );
    expect(response.body[lastTestPos].finishedby).toEqual(mockTest.finishedby);
    expect(response.body[lastTestPos].testtype).toEqual(mockTest.testtype);
    expect(response.body[lastTestPos].questions.length).toEqual(
      mockTest.questions.length
    );
    expect(response.body[lastTestPos].title).toEqual(mockTest.title);
    done();
  });
});

const mockTest = {
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
};
