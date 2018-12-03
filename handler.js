'use strict';

const ipsum = require('lorem-ipsum');

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: ipsum(),
    }),
  };

  callback(null, response);
};
