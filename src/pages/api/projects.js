const AWS = require("aws-sdk");
const { isProd } = require("../../utils");
const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
} = require("../../config/keys");

export default async () => {
  /**
   * Recieve a JSON object with fields -> firstName, lastName, company, message
   *
   * Timestamp message, store in dynamodb db
   *
   */

  if (isProd()) {
    const awsConfig = (AWS.config = new AWS.Config({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    }));
    AWS.config.update(awsConfig);
  } else {
    AWS.config.loadFromPath("./src/config/aws.json");
  }

  var ddb = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: "Projects",
  };

  var items = [];

  // const onScan = (err, data) => {
  //   if (err) {
  //     console.error(
  //       "Unable to scan the table. Error JSON:",
  //       JSON.stringify(err, null, 2)
  //     );
  //   } else {
  //     data.Items.forEach((item) => {
  //       items.push(item);
  //     });
  //   }
  // };

  try {
    var data = await ddb.scan(params).promise();

    return JSON.stringify(data.Items);
  } catch (err) {
    console.log("Error: --------", err);

    return null;
  }

  // res.status(200).json({ success: data ? true : false, data: data.Items });
};
