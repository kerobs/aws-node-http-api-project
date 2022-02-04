"use strict";

exports.handler = async (event, context, callback) => {    
  console.log('i am here');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};