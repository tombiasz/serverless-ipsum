const { RequestObject } = require('./requestObject');

class InvalidRequestObject extends RequestObject {
  constructor() {
    super();
    this.errors = [];
  }

  addError(parameter, error) {
    this.errors.push({ parameter, error })
  }

  hasErrors() {
    return this.errors.length > 0;
  }

  isValid() {
    return false;
  }
}

module.exports = {
  InvalidRequestObject,
}
