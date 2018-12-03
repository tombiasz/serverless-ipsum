const { Method } = require('../../src/methods/method');
const { FailureResponseObject } = require('../../src/responseObjects/failureResponseObject');
const { InvalidRequestObject } = require('../../src/requestObjects/invalidRequestObject');
const { ValidRequestObject } = require('../../src/requestObjects/validRequestObject');

describe('Method', () => {
  test('should handle invalid request', () => {
    const request = new InvalidRequestObject();
    request.addError('param1', 'error1');
    request.addError('param2', 'error2');
    const method = new Method();
    const response = method.process(request);
    expect(response.isSuccess()).toBeFalsy();
    expect(response.type).toBe(FailureResponseObject.VALIDATION_ERROR);
  });

  test('should handle system error', () => {
    const method = new Method();
    method.process_request = () => { throw new Error('ups :('); };
    const request = new ValidRequestObject();
    const response = method.process(request);
    expect(response.isSuccess()).toBeFalsy();
    expect(response.type).toBe(FailureResponseObject.SYSTEM_ERROR);
    expect(response.value).toEqual({
      type: FailureResponseObject.SYSTEM_ERROR,
      message: 'Error: ups :(',
    });
  });
});
