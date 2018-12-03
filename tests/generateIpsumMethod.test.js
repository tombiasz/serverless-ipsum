const { GenerateIpsumMethod } = require('../src/generateIpsumMethod');
const { IpsumService } = require('../src/ipsumService');
jest.mock('../src/ipsumService');

IpsumService.mockImplementation(() => {
  return {
    generateIpsum: jest.fn().mockReturnValue('test'),
  };
});

describe('GenerateIpsumMethod', () => {
  test('should call ipsumService.generateIpsum method', () => {
    const ipsumService = new IpsumService();
    const generateIpsumMethod = new GenerateIpsumMethod(ipsumService);
    expect(generateIpsumMethod.process()).toBe('test');
    expect(ipsumService.generateIpsum).toBeCalledWith();
  })
})
