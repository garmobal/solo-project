const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const { mockTests } = require('../mocks/mocks');

const test = require('./../models/test.model');

afterAll(async () => {
  await test.collection.drop();
});

describe('Get quiz', () => {
  let testId;

  beforeEach(async () => {
    const testRes = await test.insertMany([mockTests.valid]);
    testId = String(testRes[0]._id);
  });

  afterEach(async () => {
    await test.deleteMany({});
  });

  it('should get the quiz by ID', async (done) => {
    const response = await request.get(`/test/${testId}`);
    expect(response.status).toBe(200);
    expect(response.body._id).toEqual(testId);
    done();
  });
});

describe('Check Answers', () => {
  let testRes = 0;

  beforeEach(async () => {
    testRes = await test.insertMany([mockTests.valid]);
  });

  afterEach(async () => {
    await test.deleteMany({});
  });

  it('should return true if the answer is correct', async (done) => {
    console.log('testRes ----->', testRes[0].questions[0]);
    let body = {
      testid: testRes[0]._id,
      answer: testRes[0].questions[0].answer,
      qid: testRes[0].questions[0]._id,
      learner: true,
    };
    let response = await request.post('/quiz').send(body);
    expect(response.body).toBe(true);
    body = {
      testid: testRes[0]._id,
      answer: testRes[0].questions[1].answer,
      qid: testRes[0].questions[1]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(true);
    body = {
      testid: testRes[0]._id,
      answer: testRes[0].questions[2].answer,
      qid: testRes[0].questions[2]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(true);
    body = {
      testid: testRes[0]._id,
      answer: testRes[0].questions[3].answer,
      qid: testRes[0].questions[3]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(true);
    done();
  });

  it('should return false if the answer is wrong', async (done) => {
    let body = {
      testid: testRes[0]._id,
      answer: null,
      qid: testRes[0].questions[0]._id,
      learner: true,
    };
    let response = await request.post('/quiz').send(body);
    expect(response.body).toBe(false);
    body = {
      testid: testRes[0]._id,
      answer: null,
      qid: testRes[0].questions[1]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(false);
    body = {
      testid: testRes[0]._id,
      answer: null,
      qid: testRes[0].questions[2]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(false);
    body = {
      testid: testRes[0]._id,
      answer: null,
      qid: testRes[0].questions[3]._id,
      learner: true,
    };
    response = await request.post('/quiz').send(body);
    expect(response.body).toBe(false);
    done();
  });
});
