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
  });
});

describe("GET tests", () => {
  it("should get all tests", async (done) => {
    const response = await request.get("/test");
    const lastTestPos = response.body.length;
    console.log("lastTestPos ----->", lastTestPos);
    console.log("response.body[31] ----->", response.body[32]);
    console.log(
      "response.body[lastTestPos] ----->",
      response.body[lastTestPos - 1]
    );
    expect(response.status).toBe(200);
    expect(response.body[lastTestPosition].assignedto[0]).toEqual(
      mockTest.assignedto[0]
    );
    // expect(response.body.finishedby).toEqual(mockTest.finishedby);
    // expect(response.body.testtype).toEqual(mockTest.testtype);
    // expect(response.body.questions.length).toEqual(mockTest.questions.length);
    // expect(response.body.title).toEqual(mockTest.title);
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
