const {
  postStudent,
  postStudents,
  getStudents,
  getStudent,
  updateCompleteStudent,
  updatePendingTests,
  deleteAllStudents,
} = require('../controller/student.controller');

const student = require('./../models/student.model');

jest.mock('./../models/student.model', () => ({ student: () => {} }));

const mockStudents = [
  {
    name: 'Peter',
  },
  {
    name: 'Francesco',
  },
];

const mockStudent = [
  {
    name: 'Peter',
  },
];

describe('Student controllers unit test', () => {
  const req = {};
  const res = {
    send: jest.fn(() => res).mockName('send'),
    status: jest.fn(() => res).mockName('status'),
  };
  student.find = jest.fn();

  describe('get students', () => {
    student.find.mockImplementation(() => mockStudents);

    test('student.find should have been called once', async () => {
      await getStudents(req, res);
      expect(student.find).toHaveBeenCalledTimes(1);
    });

    test('should call res.send with the correct argument', async () => {
      await getStudents(req, res);
      expect(res.send).toHaveBeenLastCalledWith(mockStudents);
    });

    test('res.status should have been called with the correct status if there is some error', async () => {
      student.find.mockImplementation(() => {
        throw new Error();
      });
      await getStudents(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });

  describe('get student by name', () => {
    test('student.find should have been called with the name from the body of the request', async () => {
      student.find.mockImplementation(() => mockStudent);
      req.body = {
        name: 'Peter',
      };
      await postStudent(req, res);
      expect(student.find).toHaveBeenCalledWith(
        expect.objectContaining({
          name: req.body.name,
        })
      );
      expect(res.send).toHaveBeenLastCalledWith(mockStudent[0]);
    });

    test('res.status should have been called with the correct status if there are no errors', async () => {
      await postStudent(req, res);
      expect(res.status).toHaveBeenLastCalledWith(201);
    });

    test('res.status should have been called with the correct status if there is some error', async () => {
      student.find.mockImplementation(() => {
        throw new Error();
      });
      await postStudent(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });
});
