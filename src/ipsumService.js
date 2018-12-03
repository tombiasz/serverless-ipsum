const loremIpsum = require('lorem-ipsum');

class IpsumService {
  generateIpsum() {
    return loremIpsum();
  }
}

module.exports = {
  IpsumService,
}
