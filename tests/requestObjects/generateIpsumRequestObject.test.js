const { GenerateIpsumRequestObject } = require('../../src/requestObjects/generateIpsumRequestObject');

describe('GenerateIpsumRequestObject', () => {
  test('constructor should work without params', () => {
    const request = new GenerateIpsumRequestObject();
    expect(request.options).toBeUndefined();
  });

  test('constructor should set options', () => {
    const options = { foo: 1, bar: 2 };
    const request = new GenerateIpsumRequestObject(options);
    expect(request.options).toEqual(options);
  });

  test('fromObject should work with empty object', () => {
    const request = GenerateIpsumRequestObject.fromObject({});
    expect(request.options).toEqual({});
  });

  test('fromObject should work with object with empty options', () => {
    const request = GenerateIpsumRequestObject.fromObject({ options: {} });
    expect(request.options).toEqual({});
  });

  test('fromObject should properly set options', () => {
    const options = { foo: 1, bar: 2 };
    const request = GenerateIpsumRequestObject.fromObject({ options });
    expect(request.options).toEqual(options);
  });

  test('fromObject should return invalid request if options is invalid object', () => {
    const options = 1;
    const request = GenerateIpsumRequestObject.fromObject({ options });
    expect(request.isValid()).toBeFalsy();
    expect(request.hasErrors()).toBeTruthy();
    expect(request.errors[0].parameter).toBe('.options');
    expect(request.errors[0].error).toBe('should be object');
  });

  test('isValid should be true', () => {
    const request = new GenerateIpsumRequestObject();
    expect(request.isValid()).toBeTruthy();
  });
});
