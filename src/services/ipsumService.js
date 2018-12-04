const loremIpsum = require('lorem-ipsum');

class IpsumService {
  generateIpsum(options) {
    return loremIpsum(options);
  }
}

module.exports = {
  IpsumService,
};
