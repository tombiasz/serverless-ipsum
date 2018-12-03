'use strict';

const { IpsumService } = require('./src/IpsumService');

module.exports.ipsum = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: new IpsumService().generateIpsum(),
    }),
  };

  callback(null, response);
};
