class GenerateIpsumMethod {
  constructor(ipsumService) {
    this._ipsumService = ipsumService;
  }

  process() {
    return this._ipsumService.generateIpsum();
  }
}

module.exports = {
  GenerateIpsumMethod,
};
