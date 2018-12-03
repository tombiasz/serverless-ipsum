const _ = require('lodash');
const { ValidRequestObject } = require('./validRequestObject');
const { InvalidRequestObject } = require('./invalidRequestObject');

class GenerateIpsumRequestObject extends ValidRequestObject {
  constructor(options) {
    super();
    this.options = options;
  }

  static fromObject({ options }) {
    if (!_.isObject(options)) {
      const invalidRequest = new InvalidRequestObject();
      invalidRequest.addError('options', 'is not an object');
      return invalidRequest;
    }

    return new this(options);
  }
}

module.exports = {
  GenerateIpsumRequestObject,
}
