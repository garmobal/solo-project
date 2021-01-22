const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);

// const mockTest = {"questions": [
//   {options: [{op: "1", correct: false}, {op: "2", correct: false}, {op: "3", correct: true}, {op: "4", correct: false}], "questions": "How many", "answer": "3"},
//   {options: [{op: "1", correct: true}, {op: "2", correct: false}, {op: "3", correct: false}, {op: "4", correct: false}], "questions": "How much", "answer": "1"},
//   {options: [{op: "1", correct: false}, {op: "2", correct: true}, {op: "3", correct: false}, {op: "4", correct: false}], "questions": "How to", "answer": "2"},
//   {options: [{op: "1", correct: false}, {op: "2", correct: false}, {op: "3", correct: false}, {op: "4", correct: true}], "questions": "Howard", "answer": "4"}],
//   "title": "another test"}

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
