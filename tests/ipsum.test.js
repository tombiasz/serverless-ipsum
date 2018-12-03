const loremIpsum = require('lorem-ipsum');
const { ipsum } = require('../src/ipsum');

jest.mock('lorem-ipsum');

describe('ipsum', () => {
  test('check if lorem-ipsum module was called', () => {
    ipsum();
    expect(loremIpsum).toBeCalledWith();
  })
})
