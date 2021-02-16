const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const { mockTests } = require('../mocks/mocks');
const test = require('../models/test.model');

afterAll(() => {
  test.collection.drop();
});

describe('POST test', () => {
  beforeEach(async () => {
    await test.deleteMany({});
  });

  it('should not post a test if it doesnt have a title', async (done) => {
    const response = await request.post('/test').send(mockTests.noTitle);
    expect(response.status).toBe(500);
    done();
  });

  it('should not post a test if it doesnt have a test type', async (done) => {
    const response = await request.post('/test').send(mockTests.noTestType);
    expect(response.status).toBe(500);
    done();
  });

  it('should post a test if the format is valid', async (done) => {
    const response = await request.post('/test').send(mockTests.valid);
    testId = response.body._id;
    expect(response.status).toBe(201);
    expect(response.body.finishedby).toEqual(mockTests.valid.finishedby);
    expect(response.body.testtype).toEqual(mockTests.valid.testtype);
    expect(response.body.questions.length).toEqual(
      mockTests.valid.questions.length
    );
    expect(response.body.title).toEqual(mockTests.valid.title);
    done();
  });
});

describe('GET a test by ID', () => {
  let testId;
  beforeEach(async () => {
    await test.deleteMany({});
    const res = await test.create(mockTests.valid);
    testId = res._id;
  });

  it('should not fetch a test if passes an invalid ID', async (done) => {
    const response = await request.get(`/test/invalidID`);
    expect(response.status).toBe(500);
    done();
  });

  it('should get the specified test by ID', async (done) => {
    const response = await request.get(`/test/${testId}`);
    expect(response.status).toBe(200);
    expect(response.body.finishedby).toEqual(mockTests.valid.finishedby);
    expect(response.body.testtype).toEqual(mockTests.valid.testtype);
    expect(response.body.questions.length).toEqual(
      mockTests.valid.questions.length
    );
    expect(response.body.title).toEqual(mockTests.valid.title);
    expect(response.body.length).toBe(undefined);
    done();
  });
});

describe('GET tests', () => {
  beforeEach(async () => {
    await test.deleteMany({});
    await test.create(mockTests.valid);
    await test.create(mockTests.valid);
  });

  it('should get all tests', async (done) => {
    const response = await request.get('/test');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
    done();
  });
});

describe('DELETE test,', () => {
  let testId;
  beforeEach(async () => {
    await test.deleteMany({});
    await test.create(mockTests.valid);
    const res = await test.create(mockTests.valid);
    testId = res._id;
  });

  it('should delete the test specified by id', async (done) => {
    const response = await request.delete(`/test/${testId}`);
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
    done();
  });
});
