const { GenerateIpsumMethod } = require('../src/generateIpsumMethod');
const { IpsumService } = require('../src/ipsumService');
const { GenerateIpsumRequestObject } = require('../src/requestObjects/generateIpsumRequestObject');
jest.mock('../src/ipsumService');

IpsumService.mockImplementation(() => {
  return {
    generateIpsum: jest.fn().mockReturnValue('test'),
  };
});

describe('GenerateIpsumMethod', () => {
  test('should call ipsumService.generateIpsum method', () => {
    const ipsumService = new IpsumService();
    const request = GenerateIpsumRequestObject.fromObject({});
    const generateIpsumMethod = new GenerateIpsumMethod(ipsumService);

    expect(generateIpsumMethod.process(request)).toBe('test');
    expect(ipsumService.generateIpsum).toBeCalledWith({});
  })
})
