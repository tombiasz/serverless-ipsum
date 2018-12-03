class GenerateIpsumMethod {
  constructor(ipsumService) {
    this._ipsumService = ipsumService;
  }

  process(request) {
    if (!request.isValid()) {
      return request.errors;
    }
    return this._ipsumService.generateIpsum(request.options);
  }
}

module.exports = {
  GenerateIpsumMethod,
};
