const { app } = require('../app');
const supertest = require('supertest');
const request = supertest(app);

const { mockStudent, mockStudents, mockTests } = require('./../mocks/mocks');

describe('post students', () => {
  it('should post students', async (done) => {
    const response = await request.post('/student/multiple').send(mockStudents);
    expect(response.status).toBe(201);
    const firstStudent = response.body[0];
    const secondStudent = response.body[1];
    expect(firstStudent.name).toBe(mockStudents[0].name);
    expect(secondStudent.name).toBe(mockStudents[1].name);
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
    const response = await request.post('/student').send(mockStudent);
    expect(response.body.name).toBe(mockStudent.name);
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
    const firstStudent = response.body[0];
    const secondStudent = response.body[1];
    expect(firstStudent.name).toBe(mockStudents[0].name);
    expect(secondStudent.name).toBe(mockStudents[1].name);
    expect(firstStudent.pendingtests).toEqual([]);
    expect(secondStudent.pendingtests).toEqual([]);
    expect(firstStudent.classes).toEqual([]);
    expect(secondStudent.classes).toEqual([]);
    expect(firstStudent.completedtests).toEqual([]);
    expect(secondStudent.completedtests).toEqual([]);
    done();
  });
});

describe('get student', () => {
  it('should get student by id', async (done) => {
    const studentsResponse = await request.get('/student');
    const firstStudent = studentsResponse.body[0];
    const studentResponse = await request.get(`/student/${firstStudent._id}`);
    const student = studentResponse.body;
    expect(studentResponse.status).toBe(200);
    expect(student.name).toBe(mockStudents[0].name);
    expect(student.pendingtests).toEqual([]);
    expect(student.classes).toEqual([]);
    expect(student.completedtests).toEqual([]);

    done();
  });
});

describe('update pending tests', () => {
  it('should update pending tests', async (done) => {
    const studentsResponse = await request.get('/student');
    const ssids = [studentsResponse.body[0]._id, studentsResponse.body[1]._id];
    const test = mockTests.valid;
    const response = await request.put('/student/pending/3').send({
      ssids: ssids,
      test: test,
    });
    expect(response.status).toBe(200);
    const firstStudent = response.body[0];
    const secondStudent = response.body[1];
    expect(firstStudent.pendingtests[0].title).toBe(mockTests.valid.title);
    expect(secondStudent.pendingtests[0].title).toBe(mockTests.valid.title);
    expect(firstStudent.classes).toEqual([]);
    expect(secondStudent.classes).toEqual([]);
    expect(firstStudent.completedtests).toEqual([]);
    expect(secondStudent.completedtests).toEqual([]);
    done();
  });
});

describe('update complete tests', () => {
  it('should update complete tests', async (done) => {
    const studentsResponse = await request.get('/student');
    const ssid = studentsResponse.body[0]._id;
    const response = await request
      .put(`/student/completed/${ssid}`)
      .send(mockTests.valid);

    expect(response.status).toBe(200);
    const firstStudent = response.body;
    expect(firstStudent.pendingtests).toEqual([]);
    expect(firstStudent.classes).toEqual([]);
    expect(firstStudent.completedtests[0].title).toBe(mockTests.valid.title);

    done();
  });
});

describe('delete students', () => {
  it('should delete students', async (done) => {
    const response = await request.delete('/student');
    expect(response.body).toEqual({});
    expect(response.status).toBe(204);
    done();
  });
});
