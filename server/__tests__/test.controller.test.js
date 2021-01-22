const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);

const mockTest = {
  assignedto: [],
  finishedby: [],
  questions: [
  {options: [{op: "1", correct: true}, {op: "2", correct: false}, {op: "3", correct: false}, {op: "4", correct: false}], question: "How much", answer: "1"},
  {options: [{op: "1", correct: false}, {op: "2", correct: false}, {op: "3", correct: true}, {op: "4", correct: false}], question: "How many", answer: "3"},
  {options: [{op: "1", correct: false}, {op: "2", correct: true}, {op: "3", correct: false}, {op: "4", correct: false}], question: "How to", answer: "2"},
  {options: [{op: "1", correct: false}, {op: "2", correct: false}, {op: "3", correct: false}, {op: "4", correct: true}], question: "Howard", answer: "4"}],
  title: "another test",
  testtype: "Syllable quiz"
}

//returns 201 but doesnt appear in the DB...
describe('POST test', () => {
  it('should post a test', async (done) => {
    const response = await request.post('/test').send(mockTest);
    expect(response.status).toBe(201);
    done();
  });
});

describe('GET tests', () => {
  it('should get all tests', async (done) => {
    const response = await request.get('/test');
    console.log('response.body ----->', response.body);
    expect(response.status).toBe(200);
    done();
  });
});
