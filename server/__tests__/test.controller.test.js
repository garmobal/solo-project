const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const { mockTests } = require('../mocks/mocks');

let testId;

describe('POST test', () => {
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
    expect(response.body.assignedto[0]).toEqual(mockTests.valid.assignedto[0]);
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
  it('should not fetch a test if passes an invalid ID', async (done) => {
    const response = await request.get(`/test/invalidID`);
    expect(response.status).toBe(500);
    done();
  });
  it('should get the specified test by ID', async (done) => {
    const response = await request.get(`/test/${testId}`);
    expect(response.status).toBe(200);
    expect(response.body.assignedto[0]).toEqual(mockTests.valid.assignedto[0]);
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
  it('should get all tests', async (done) => {
    const response = await request.get('/test');
    const lastTestPos = response.body.length - 1;
    expect(response.status).toBe(200);
    expect(response.body[lastTestPos].assignedto[0]).toEqual(
      mockTests.valid.assignedto[0]
    );
    expect(response.body[lastTestPos].finishedby).toEqual(
      mockTests.valid.finishedby
    );
    expect(response.body[lastTestPos].testtype).toEqual(
      mockTests.valid.testtype
    );
    expect(response.body[lastTestPos].questions.length).toEqual(
      mockTests.valid.questions.length
    );
    expect(response.body[lastTestPos].title).toEqual(mockTests.valid.title);
    done();
  });
});

describe('DELETE test,', () => {
  it('should delete the test specified by id', async (done) => {
    const response = await request.delete(`/test/${testId}`);
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
    done();
  });
});
