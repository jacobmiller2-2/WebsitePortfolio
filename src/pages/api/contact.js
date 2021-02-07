const AWS = require("aws-sdk");
const { isProd } = require("../../utils");
const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
} = require("../../config/keys");

export default async (req, res) => {
  /**
   * Recieve a JSON object with fields -> firstName, lastName, company, message
   *
   * Timestamp message, store in dynamodb db
   *
   */

  var { firstName, lastName, company, message } = req.body;

  if (!firstName || !lastName || !message) {
    res.json({
      code: 400,
      error: "Bad request",
    });
  }

  if (isProd()) {
    // var awsConfig = new AWS.Config({});
  } else {
    AWS.config.loadFromPath("./src/config/aws.json");
    w;
  }

  var ddb = new AWS.DynamoDB(
    isProd()
      ? {
          accessKeyId: AWS_ACCESS_KEY_ID,
          secretAccessKey: AWS_SECRET_ACCESS_KEY,
          region: AWS_REGION,
          apiVersion: "2012-08-10",
        }
      : { apiVersion: "2012-08-10" }
  );

  var params = {
    TableName: "Messages",
    Item: {
      firstName: { S: firstName },
      lastName: { S: lastName },
      company: { S: company },
      message: { S: message },
      dateSent: { N: `${Date.now()}` },
    },
  };

  try {
    var data = await ddb.putItem(params).promise();
  } catch (err) {
    console.log("Error: ");
  }

  res.send(data);
};
