const Ajv = require('Ajv');
const { RequestObject } = require('./requestObject');

class ValidRequestObject extends RequestObject {
  static fromObject(obj) {
    throw new Error('not implemented');
  }

  isValid() {
    return true;
  }

  static schema() {
    return {};
  }

  static validate(data) {
    const ajv =  new Ajv({ coerceTypes: true, allErrors: true, useDefaults: true });
    const valid = ajv.validate(this.schema, data);
    return { isValid: valid, errors: ajv.errors };
  }
}

module.exports = {
  ValidRequestObject,
}
