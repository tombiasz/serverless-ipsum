const { FailureResponseObject } = require('../responseObjects/failureResponseObject');

class Method {
  process_request(request) {
    throw new Error('not implemented');
  }

  process(request) {
    if (!request.isValid()) {
      return FailureResponseObject.buildFromInvalidRequestObject(request);
    }

    try {
      return this.process_request(request)
    } catch(err) {
      return FailureResponseObject.buildFromError(err);
    }
  }
}

module.exports = {
  Method,
};
