const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);

const students = [{ name: 'Peter' }, { name: 'Francesco' }];

describe('post students', () => {
  it('should post students', async (done) => {
    const response = await request.post('/student/multiple').send(students);
    expect(response.status).toBe(201);
    done();
  });
});

describe('get students', () => {
  it('should get students', async (done) => {
    const response = await request.get('/student');
    expect(response.status).toBe(200);
    done();
  });
});

describe('delete students', () => {
  it('should delete students', async (done) => {
    const response = await request.delete('/student');
    expect(response.status).toBe(204);
    done();
  });
});
