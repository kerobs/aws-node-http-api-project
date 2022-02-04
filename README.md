# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda using the Serverless Framework.

[![CI / CD](https://github.com/kerobs/aws-nodejs-lambda-func/actions/workflows/ci.yml/badge.svg)](https://github.com/kerobs/aws-nodejs-lambda-func/actions/workflows/ci.yml)

## Usage

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  handler: aws-node-http-api-project-dev-handler (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function handler
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).


### Installing and running Jest

First, let's install the Jest command-line interface (Jest CLI):

npm install –-save-dev jest-cli

This command installs the Jest CLI, and adds it as a development dependency to our ~/snapterest/package.json file. Next, let's edit the package.json file. We'll replace the existing "script" object:

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},

Replace the preceding object with the following one:

"scripts": {
  "test": "jest"
},

Now we're ready to run our test suit. Navigate to the ~/snapterest/ directory, and run the following command:

npm test
You should see the following message in your Terminal:

### Using Jest CLI v0.4.18
 PASS  source/utils/__tests__/TweetUtils-test.js (0.065s)
1 test passed (1 total)