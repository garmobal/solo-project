const {
  getTests,
  postTest,
  getTest,
  deleteTest,
} = require('../controller/test.controller');
const { mockTests } = require('../mocks/mocks');
const mockId = 0;
const multipleTests = [mockTests.valid, mockTests.valid];
const test = require('./../models/test.model');

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

    it('test.find should have been called once', async () => {
      await getTests(req, res);
      expect(test.find).toHaveBeenCalledTimes(1);
    });

    it('should call res.send with the correct status', async () => {
      await getTests(req, res);
      expect(res.send).toHaveBeenCalledWith(multipleTests);
    });
  });

  describe('postTests should post a test when valid', () => {
    test.create = jest.fn();
    test.create.mockResolvedValue(mockTests.valid);

    it('test.create should have been called once', async () => {
      await postTest(req, res);
      expect(test.create).toHaveBeenCalledTimes(1);
    });

    it('should call res.send with the correct status', async () => {
      await postTest(req, res);
      expect(res.send).toHaveBeenCalledWith(mockTests.valid);
    });

    // it('should return the correct res.status', async () => {
    //   await postTest(req, res);
    //   expect(res.status).toHaveBeenCalledWith(201);
    // });
  });

  describe('getTest should get a specific test when valid', () => {
    req.params = {
      id: mockId,
    };
    test.findOne = jest.fn();
    test.findOne.mockResolvedValue(mockTests.valid);

    it('test.create should have been called once', async () => {
      await getTest(req, res);
      expect(test.findOne).toHaveBeenCalledTimes(1);
    });

    it('should return the correct res.status', async () => {
      await getTest(req, res);
      expect(test.findOne).toHaveBeenCalledWith({ _id: mockId });
    });

    it('should call res.send with the correct status', async () => {
      await getTest(req, res);
      expect(res.send).toHaveBeenCalledWith(mockTests.valid);
    });
  });

  describe('deleteTest should delete a specific test when valid', () => {
    req.params = {
      id: mockId,
    };
    test.deleteOne = jest.fn();
    test.deleteOne.mockResolvedValue(mockTests.valid);

    it('test.deleteOne should have been called once', async () => {
      await deleteTest(req, res);
      expect(test.deleteOne).toHaveBeenCalledTimes(1);
    });

    it('should return the correct res.status', async () => {
      await deleteTest(req, res);
      expect(test.deleteOne).toHaveBeenCalledWith({ _id: mockId });
    });

    it('should call res.send with the correct status', async () => {
      await deleteTest(req, res);
      expect(res.send).toHaveBeenCalledWith(mockTests.valid);
    });
  });
});
