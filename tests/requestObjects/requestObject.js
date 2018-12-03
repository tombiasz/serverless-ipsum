const { RequestObject } = require('../../src/responseObjects/requestObject');

describe('RequestObject', () => {
  test('isValid should throw error', () => {
    expect(() => new RequestObject().isValid()).toThrow(Error);
  });
})
