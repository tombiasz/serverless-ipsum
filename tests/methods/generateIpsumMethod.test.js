const { GenerateIpsumMethod } = require('../../src/methods/generateIpsumMethod');
const { IpsumService } = require('../../src/services/ipsumService');
const { GenerateIpsumRequestObject } = require('../../src/requestObjects/generateIpsumRequestObject');
const { FailureResponseObject } = require('../../src/responseObjects/failureResponseObject');

jest.mock('../../src/services/ipsumService');

IpsumService.mockImplementation(() => {
  return {
    generateIpsum: jest.fn().mockReturnValue('test'),
  };
});

describe('GenerateIpsumMethod', () => {
  test('should generate ipsum without options', () => {
    const ipsumService = new IpsumService();
    const request = GenerateIpsumRequestObject.fromObject({});
    const generateIpsumMethod = new GenerateIpsumMethod(ipsumService);
    const response = generateIpsumMethod.process(request)
    expect(ipsumService.generateIpsum).toBeCalledWith({});
    expect(response.isSuccess()).toBeTruthy();
    expect(response.value).toBe('test');
  });

  test('should generate ipsum with options', () => {
    const options = { count: 4 };
    const ipsumService = new IpsumService();
    const request = GenerateIpsumRequestObject.fromObject({ options });
    const generateIpsumMethod = new GenerateIpsumMethod(ipsumService);
    const response = generateIpsumMethod.process(request)
    expect(ipsumService.generateIpsum).toBeCalledWith(options);
    expect(response.isSuccess()).toBeTruthy();
    expect(response.value).toBe('test');
  });

  test('should handle bad request', () => {
    const ipsumService = new IpsumService();
    const request = GenerateIpsumRequestObject.fromObject({ options: 'bad' });
    const generateIpsumMethod = new GenerateIpsumMethod(ipsumService);
    const response = generateIpsumMethod.process(request);
    expect(response.isSuccess()).toBeFalsy();
    expect(response.type).toBe(FailureResponseObject.VALIDATION_ERROR);
  });

  test('should handle system error', () => {
    IpsumService.mockImplementation(() => {
      return {
        generateIpsum() { throw new Error('ups :('); }
      };
    });
    const ipsumService = new IpsumService();
    const request = GenerateIpsumRequestObject.fromObject({});
    const generateIpsumMethod = new GenerateIpsumMethod(ipsumService);
    const response = generateIpsumMethod.process(request);
    expect(response.isSuccess()).toBeFalsy();
    expect(response.type).toBe(FailureResponseObject.SYSTEM_ERROR);
    expect(response.message).toBe('Error: ups :(');
  });
})
