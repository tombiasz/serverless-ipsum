const { GenerateIpsumRequestObject } = require('./requestObjects/generateIpsumRequestObject');
const { IpsumService } = require('./services/ipsumService');
const { GenerateIpsumMethod } = require('./methods/generateIpsumMethod');
const { SuccessResponseObject } = require('./responseObjects/successResponseObject');
const { FailureResponseObject } = require('./responseObjects/failureResponseObject');

STATUS_CODE_MAP = {
  [SuccessResponseObject.SUCCESS]: 200,
  [FailureResponseObject.VALIDATION_ERROR]: 400,
  [FailureResponseObject.SYSTEM_ERROR]: 500
};

function responseObjectToHttpResponse({ type, value }) {
  return {
    statusCode: STATUS_CODE_MAP[type],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ message: value }),
  };
}

function getIpsum(event, context, callback) {
  const queryParams = { options: { ...event.queryStringParameters } };
  const request = GenerateIpsumRequestObject.fromObject(queryParams);
  const ipsumService =  new IpsumService();
  const generateIpsumMethod = new GenerateIpsumMethod(ipsumService);
  const response = generateIpsumMethod.process(request);
  callback(null, responseObjectToHttpResponse(response));
};

module.exports = {
  getIpsum,
}
