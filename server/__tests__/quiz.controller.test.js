const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const { mockTests } = require('../mocks/mocks');

let testID;

beforeAll(async () => {
  const response = await request.post('/test').send(mockTests.valid);
  testID = response.body._id;
});

describe('Get quiz', () => {
  it('should get the quiz by ID', async (done) => {
    const response = await request.get(`/test/${testID}`);
    expect(response.status).toBe(200);
    expect(response.body._id).toEqual(testID);
    console.log('response.body ----->', response.body);
    done();
  });
});
