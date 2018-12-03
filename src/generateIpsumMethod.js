const { FailureResponseObject } = require('./responseObjects/failureResponseObject');
const { SuccessResponseObject } = require('./responseObjects/successResponseObject');

class GenerateIpsumMethod {
  constructor(ipsumService) {
    this._ipsumService = ipsumService;
  }

  process(request) {
    if (!request.isValid()) {
      return FailureResponseObject.buildFromInvalidRequestObject(request);
    }
    try {
      const ipsum = this._ipsumService.generateIpsum(request.options);
      return new SuccessResponseObject(ipsum);
    } catch(err) {
      return FailureResponseObject.buildFromError(err);
    }
  }
}

module.exports = {
  GenerateIpsumMethod,
};
