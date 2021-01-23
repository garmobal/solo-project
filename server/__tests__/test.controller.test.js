const { app } = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const { mockTests } = require("../mocks/mocks");

describe("POST test", () => {
  it("should post a test if the format is valid", async (done) => {
    const response = await request.post("/test").send(mockTests.valid);
    expect(response.status).toBe(201);
    expect(response.body.assignedto[0]).toEqual(mockTests.valid.assignedto[0]);
    expect(response.body.finishedby).toEqual(mockTests.valid.finishedby);
    expect(response.body.testtype).toEqual(mockTests.valid.testtype);
    expect(response.body.questions.length).toEqual(
      mockTests.valid.questions.length
    );
    expect(response.body.title).toEqual(mockTests.valid.title);
    done();
  });
  // it("should not post a test if it has less than than 4 questions", async (done) => {
  // });
});

// describe("GET tests", () => {
//   it("should get all tests", async (done) => {
//     const response = await request.get("/test");
//     const lastTestPos = response.body.length - 1;
//     expect(response.status).toBe(200);
//     expect(response.body[lastTestPos].assignedto[0]).toEqual(
//       mockTest.assignedto[0]
//     );
//     expect(response.body[lastTestPos].finishedby).toEqual(mockTest.finishedby);
//     expect(response.body[lastTestPos].testtype).toEqual(mockTest.testtype);
//     expect(response.body[lastTestPos].questions.length).toEqual(
//       mockTest.questions.length
//     );
//     expect(response.body[lastTestPos].title).toEqual(mockTest.title);
//     done();
//   });
// });
