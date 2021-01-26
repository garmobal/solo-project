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

describe('Student controllers unit test', () => {
  const req = {};
  const res = {
    send: jest.fn(() => res).mockName('send'),
    status: jest.fn(() => res).mockName('status'),
  };
  describe('get students', () => {
    student.find = jest.fn();
    student.find.mockResolvedValue(mockStudents);

    test('student.find should have been called once', async () => {
      await getStudents(req, res);
      expect(student.find).toHaveBeenCalledTimes(1);
    });

    test('should call res.send with the correct status', async () => {
      await getStudents(req, res);
      expect(res.send).toHaveBeenCalledWith(mockStudents);
    });
  });
});
