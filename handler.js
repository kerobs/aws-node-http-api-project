"use strict";

import { CognitoJwtVerifier } from "aws-jwt-verify";

// Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
  userPoolId: "<user_pool_id>",
  tokenUse: "access",
  clientId: "<client_id>",
});

//https://github.com/awslabs/aws-jwt-verify

module.exports.hello = async (event) => {

  console.log('i am here');
  
  try {
    const payload = await verifier.verify(

      "eyJraWQeyJhdF9oYXNoIjoidk..." // the JWT as string

    );

    console.log("Token is valid. Payload:", payload);

  } catch {

    console.log("Token not valid!");

  }

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: "Go Serverless v3.0! Your function executed successfully!",
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };

};
