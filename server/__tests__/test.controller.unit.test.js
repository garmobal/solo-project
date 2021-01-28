const {
  getTests,
  postTest,
  getTest,
  deleteTest,
} = require('../controller/test.controller');
const test = require('./../models/test.model');
const { mockTests, mockId } = require('../mocks/mocks');
const multipleTests = [mockTests.valid, mockTests.valid];

jest.mock('./../models/test.model', () => ({ test: () => {} }));

describe('Test controllers unit test', () => {
  const req = {};
  const res = {
    send: jest.fn(() => res).mockName('send'),
    status: jest.fn(() => res).mockReturnValue('status'),
  };

  describe('getTests should get all tests when valid', () => {
    test.find = jest.fn();
    test.find.mockResolvedValue(multipleTests);
    it('test.find should have been called once', () => {
      getTests(req, res);
      expect(test.find).toHaveBeenCalledTimes(1);
    });

    it('should call res.send with the correct status', () => {
      getTests(req, res);
      expect(res.send).toHaveBeenCalledWith(multipleTests);
    });

    it('should call res.send with the correct status', () => {
      test.find.mockImplementationOnce(() => {
        throw new Error('');
      });
      getTests(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });

  describe('postTests should post a test when valid', () => {
    test.create = jest.fn();
    test.create.mockResolvedValue(mockTests.valid);

    it('test.create should have been called once', () => {
      postTest(req, res);
      expect(test.create).toHaveBeenCalledTimes(1);
    });

    it('should call res.send with the correct status', () => {
      postTest(req, res);
      expect(res.send).toHaveBeenCalledWith(mockTests.valid);
    });

    it('should return the correct res.status', () => {
      postTest(req, res);
      expect(res.status).toHaveBeenLastCalledWith(201);
    });

    it('should call res.send with the correct status', () => {
      test.create.mockImplementationOnce(() => {
        throw new Error('');
      });
      postTest(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });

  describe('getTest should get a specific test when valid', () => {
    req.params = {
      id: mockId,
    };
    test.findOne = jest.fn();
    test.findOne.mockResolvedValue(mockTests.valid);

    it('test.create should have been called once', () => {
      getTest(req, res);
      expect(test.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return the correct res.status', () => {
      getTest(req, res);
      expect(test.findOne).toHaveBeenCalledWith({ _id: mockId });
    });

    it('should call res.send with the correct status', () => {
      getTest(req, res);
      expect(res.send).toHaveBeenCalledWith(mockTests.valid);
    });

    it('should call res.send with the correct status', () => {
      test.findOne.mockImplementationOnce(() => {
        throw new Error('');
      });
      getTest(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });

  describe('deleteTest should delete a specific test when valid', () => {
    req.params = {
      id: mockId,
    };
    test.deleteOne = jest.fn();
    test.deleteOne.mockResolvedValue(mockTests.valid);

    it('test.deleteOne should have been called once', () => {
      deleteTest(req, res);
      expect(test.deleteOne).toHaveBeenCalledTimes(1);
    });

    it('should return the correct res.status', () => {
      deleteTest(req, res);
      expect(test.deleteOne).toHaveBeenCalledWith({ _id: mockId });
    });

    it('should call res.send with the correct status', () => {
      deleteTest(req, res);
      expect(res.send).toHaveBeenCalledWith(mockTests.valid);
    });

    it('should return the correct res.status', () => {
      deleteTest(req, res);
      expect(res.status).toHaveBeenLastCalledWith(204);
    });

    it('should call res.send with the correct status', () => {
      test.deleteOne.mockImplementationOnce(() => {
        throw new Error('');
      });
      deleteTest(req, res);
      expect(res.status).toHaveBeenLastCalledWith(500);
    });
  });
});
