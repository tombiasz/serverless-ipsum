const { Method } = require('./method');
const { SuccessResponseObject } = require('../responseObjects/successResponseObject');

class GenerateIpsumMethod extends Method {
  constructor(ipsumService) {
    super();
    this.ipsumService = ipsumService;
  }

  processRequest(request) {
    const ipsum = this.ipsumService.generateIpsum(request.options);
    return new SuccessResponseObject(ipsum);
  }
}

module.exports = {
  GenerateIpsumMethod,
};
