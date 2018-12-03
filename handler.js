'use strict';

const { IpsumService } = require('./src/IpsumService');
const { GenerateIpsumMethod } = require('./src/generateIpsumMethod');

module.exports.ipsum = (event, context, callback) => {
  const ipsumService =  new IpsumService();
  const generateIpsumMethod = new GenerateIpsumMethod(ipsumService);

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: generateIpsumMethod.process(),
    }),
  };

  callback(null, response);
};
