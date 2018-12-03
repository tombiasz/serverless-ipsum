const { ValidRequestObject } = require('./validRequestObject');
const { InvalidRequestObject } = require('./invalidRequestObject');

class GenerateIpsumRequestObject extends ValidRequestObject {
  constructor(options) {
    super();
    this.options = options;
  }

  static get schema() {
    return {
      type: 'object',
      properties: {
        options: {
          type: 'object',
          default: {},
          properties: {
            count: { type: 'number', minimum: 1, maximum: 500 },
            units: { type: 'string', enum: ['words', 'sentence', 'paragraph'] },
            sentenceLowerBound: { type: 'number', minimum: 1, maximum: 100 },
            sentenceUpperBound: { type: 'number', minimum: 1, maximum: 100 },
            paragraphLowerBound: { type: 'number', minimum: 1, maximum: 30 },
            paragraphUpperBound: { type: 'number', minimum: 1, maximum: 30 },
            format: { type: 'string', enum: ['plain', 'html'] },
          },
        }
      },
    };
  }

  static fromObject(obj) {
    const { isValid, errors } = this.validate(obj);
    if (!isValid) {
      const invalidRequest = new InvalidRequestObject();
      errors.forEach(error => {
        invalidRequest.addError(error.dataPath, error.message);
      });
      return invalidRequest;
    }

    return new this(obj.options);
  }
}

module.exports = {
  GenerateIpsumRequestObject,
}
