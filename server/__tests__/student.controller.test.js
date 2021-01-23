const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);

const student = { name: 'Peter' };
const students = [{ name: 'Peter' }, { name: 'Francesco' }];

describe('post students', () => {
  it('should post students', async (done) => {
    const response = await request.post('/student/multiple').send(students);
    expect(response.status).toBe(201);
    const firstStudent = response.body[0];
    const secondStudent = response.body[1];
    expect(firstStudent.name).toBe(students[0].name);
    expect(secondStudent.name).toBe(students[1].name);
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

    done();
  });
});

describe('post student', () => {
  it('should get a single student', async (done) => {
    const response = await request.post('/student').send(student);
    expect(response.body.name).toBe(student.name);
    expect(response.body.pendingtests).toEqual([]);
    expect(response.body.classes).toEqual([]);
    expect(response.body.completedtests).toEqual([]);
    expect(response.status).toBe(201);
    done();
  });

  it('should return empty object if the name of the student is not provided', async (done) => {
    const response = await request.post('/student').send();
    expect(response.body).toEqual({});
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
