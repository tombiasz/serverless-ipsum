const loremIpsum = require('lorem-ipsum');
const { IpsumService } = require('../../src/services/ipsumService');

jest.mock('lorem-ipsum');

describe('IpsumService', () => {
  beforeEach(() => {
    loremIpsum.mockReset();
  });

  test('should call lorem-ipsum module', () => {
    const ipsumService = new IpsumService();
    const options = { foo: 1 };
    ipsumService.generateIpsum(options);
    expect(loremIpsum).toBeCalledWith(options);
  });

  test('should return string', () => {
    const expected = 'test';
    loremIpsum.mockReturnValue(expected);
    const ipsumService = new IpsumService();
    const received = ipsumService.generateIpsum();
    expect(received).toBe(expected);
  })
})
