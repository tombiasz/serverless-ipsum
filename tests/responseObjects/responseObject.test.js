const { ResponseObject } = require('../../src/responseObjects/responseObject');

describe('ResponseObject', () => {
  test('isSuccess should throw error', () => {
    expect(() => new ResponseObject().isSuccess()).toThrow(Error);
  });
})
