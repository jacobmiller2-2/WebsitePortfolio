const AWS = require("aws-sdk");
const { isProd } = require("../../utils");
const keys = require("../../config/keys");

export default async () => {
  /**
   * Recieve a JSON object with fields -> firstName, lastName, company, message
   *
   * Timestamp message, store in dynamodb db
   *
   */

  if (isProd()) {
    // var awsConfig = new AWS.Config({});
  } else {
    AWS.config.loadFromPath("./src/config/aws-config-dev.json");
  }
  console.log(keys.default.AWS_ACCESS_KEY_ID);
  var ddb = new AWS.DynamoDB.DocumentClient(
    isProd()
      ? {
          accessKeyId: keys.default.AWS_ACCESS_KEY_ID,
          secretAccessKey: keys.default.AWS_SECRET_ACCESS_KEY,
          region: keys.default.AWS_REGION,
          apiVersion: "2012-08-10",
        }
      : { apiVersion: "2012-08-10" }
  );

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
