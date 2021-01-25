const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const { mockTests } = require('../mocks/mocks');

let createTestRes;

beforeAll(async () => {
  createTestRes = await request.post('/test').send(mockTests.valid);
});

describe('Get quiz', () => {
  it('should get the quiz by ID', async (done) => {
    const response = await request.get(`/test/${createTestRes.body._id}`);
    expect(response.status).toBe(200);
    expect(response.body._id).toEqual(createTestRes.body._id);
    done();
  });
});

describe('Check Answers', () => {
  it('should return true if the answer is correct', async (done) => {
    let body = {
      testid: createTestRes.body._id,
      answer: createTestRes.body.questions[0].answer,
      qid: createTestRes.body.questions[0]._id,
      learner: true,
    };
    let response = await request.post('/quiz').send(body);
    expect(response.body).toBe(true);
    body = {
      testid: createTestRes.body._id,
      answer: createTestRes.body.questions[1].answer,
      qid: createTestRes.body.questions[1]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(true);
    body = {
      testid: createTestRes.body._id,
      answer: createTestRes.body.questions[2].answer,
      qid: createTestRes.body.questions[2]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(true);
    body = {
      testid: createTestRes.body._id,
      answer: createTestRes.body.questions[3].answer,
      qid: createTestRes.body.questions[3]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(true);
    done();
  });

  it('should return false if the answer is wrong', async (done) => {
    let body = {
      testid: createTestRes.body._id,
      answer: null,
      qid: createTestRes.body.questions[0]._id,
      learner: true,
    };
    let response = await request.post('/quiz').send(body);
    expect(response.body).toBe(false);
    body = {
      testid: createTestRes.body._id,
      answer: null,
      qid: createTestRes.body.questions[1]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(false);
    body = {
      testid: createTestRes.body._id,
      answer: null,
      qid: createTestRes.body.questions[2]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(false);
    body = {
      testid: createTestRes.body._id,
      answer: null,
      qid: createTestRes.body.questions[3]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(false);
    done();
  });
});
