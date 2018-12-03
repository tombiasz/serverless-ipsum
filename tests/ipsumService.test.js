const loremIpsum = require('lorem-ipsum');
const { IpsumService } = require('../src/IpsumService');

jest.mock('lorem-ipsum');

describe('IpsumService', () => {
  beforeEach(() => {
    loremIpsum.mockReset();
  });

  test('should call lorem-ipsum module', () => {
    const ipsumSrc = new IpsumService();
    ipsumSrc.generateIpsum();
    expect(loremIpsum).toBeCalledWith();
  });

  test('should return string', () => {
    const expected = 'test';
    loremIpsum.mockReturnValue(expected);
    const ipsumSrc = new IpsumService();
    const received = ipsumSrc.generateIpsum();
    expect(received).toBe(expected);
  })
})
