const {
  postStudent,
  postStudents,
  getStudents,
  getStudent,
  updateCompleteStudent,
  updatePendingTests,
  deleteAllStudents,
} = require('../controller/student.controller');
const { cloneDeep } = require('lodash');

const student = require('./../models/student.model');
const {
  mockStudent,
  mockStudents,
  mockTestWithIds,
} = require('./../mocks/mocks');

jest.mock('./../models/student.model', () => ({ student: () => {} }));

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

  describe('post students', () => {
    student.insertMany = jest.fn();
    test('student.insertMany should have been called with the students to insert', async () => {
      req.body = mockStudents;
      await postStudents(req, res);
      expect(student.insertMany).toHaveBeenLastCalledWith(req.body);
    });

    test('res.send should have been called with the correct argument', async () => {
      student.insertMany.mockImplementation(() => mockStudents);
      await postStudents(req, res);
      expect(res.send).toHaveBeenLastCalledWith(mockStudents);
    });

    test('res.status should have been called with the correct status if there are no errors', async () => {
      await postStudents(req, res);
      expect(res.status).toHaveBeenLastCalledWith(201);
    });

    test('res.status should have been called with the correct status if there is some error', async () => {
      student.insertMany.mockImplementation(() => {
        throw new Error();
      });
      await postStudents(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });

  describe('get student by id', () => {
    student.findOne = jest.fn();
    test('student.findOne should have been called with the correct id', async () => {
      req.params = {
        id: 1,
      };
      await getStudent(req, res);
      expect(student.findOne).toHaveBeenLastCalledWith(
        expect.objectContaining({
          _id: req.params.id,
        })
      );
    });

    test('res.send should have been called with the correct argument', async () => {
      student.findOne.mockImplementation(() => mockStudent);
      await getStudent(req, res);
      expect(res.send).toHaveBeenLastCalledWith(mockStudent);
    });

    test('res.status should have been called with the correct status if there is some error', async () => {
      student.findOne.mockImplementation(() => {
        throw new Error();
      });
      await getStudent(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });

  describe('update complete student', () => {
    student.findOne = jest.fn();
    req.params = {
      id: 1,
    };
    const testWithId = Object.assign({}, mockTestWithIds);
    testWithId.id = req.params.id;

    const updateCompleteStudentRes = {
      completedtests: [],
      pendingtests: [testWithId],
      save: jest.fn().mockName('save'),
    };

    const updateCompleteStudentExpRes = {
      completedtests: [testWithId],
      pendingtests: [],
      save: updateCompleteStudentRes.save,
    };

    test('student.findOne should have been called with the correct id', async () => {
      await updateCompleteStudent(req, res);
      expect(student.findOne).toHaveBeenLastCalledWith(
        expect.objectContaining({
          _id: req.params.id,
        })
      );
    });

    test('res.send should have been called with the updated student', async () => {
      req.body = testWithId;
      student.findOne.mockImplementation(() =>
        cloneDeep(updateCompleteStudentRes)
      );
      await updateCompleteStudent(req, res);
      expect(res.send).toHaveBeenLastCalledWith(updateCompleteStudentExpRes);
    });

    test('res.status should have been called with the correct status if there are no errors', async () => {
      await updateCompleteStudent(req, res);
      expect(res.status).toHaveBeenLastCalledWith(200);
    });

    test('res.status should have been called with the correct status if there is some error', async () => {
      student.findOne.mockImplementation(() => {
        throw new Error();
      });
      await updateCompleteStudent(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });

  describe('update pending tests', () => {
    student.updateMany = jest.fn();

    test('student.updateMany should have been called with the correct argument', async () => {
      student.find.mockImplementation(() => mockStudents);
      req.body.ssids = [1, 2];
      req.body.test = mockTestWithIds;
      await updatePendingTests(req, res);
      expect(student.updateMany).toHaveBeenLastCalledWith(
        { _id: { $in: req.body.ssids } },
        { $push: { pendingtests: req.body.test } }
      );
    });

    test('res.send should have been called with the updated students', async () => {
      await updatePendingTests(req, res);
      expect(res.send).toHaveBeenLastCalledWith(mockStudents);
    });

    test('res.status should have been called with the correct status if there are no errors', async () => {
      await updatePendingTests(req, res);
      expect(res.status).toHaveBeenLastCalledWith(200);
    });

    test('res.status should have been called with the correct status if there is some error', async () => {
      student.find.mockImplementation(() => {
        throw new Error();
      });
      await updateCompleteStudent(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });
});
