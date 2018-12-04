const { RequestObject } = require('../../src/requestObjects/requestObject');

describe('RequestObject', () => {
  test('isValid should throw error', () => {
    expect(() => new RequestObject().isValid()).toThrow(Error);
  });
});
