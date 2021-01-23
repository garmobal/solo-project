const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);

const students = [{ name: 'Peter' }, { name: 'Francesco' }];

describe('post students', () => {
  it('should post students', async (done) => {
    const response = await request.post('/student/multiple').send(students);
    expect(response.status).toBe(201);
    const firstStudent = response.body[0];
    const secondStudent = response.body[1];
    expect(firstStudent.name).toBe('Peter');
    expect(secondStudent.name).toBe('Francesco');
    expect(firstStudent.pendingtests).toEqual([]);
    expect(secondStudent.pendingtests).toEqual([]);
    expect(firstStudent.classes).toEqual([]);
    expect(secondStudent.classes).toEqual([]);
    expect(firstStudent.completedtests).toEqual([]);
    expect(secondStudent.completedtests).toEqual([]);
    done();
  });

  it('should not post students if the name is not provided', async (done) => {
    const response = await request
      .post('/student/multiple')
      .send([{ surname: 'French' }]);
    expect(response.status).toBe(500);

    console.log('response.body :>> ', response.body);
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
