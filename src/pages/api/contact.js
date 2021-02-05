const AWS = require("aws-sdk");

export default (req, res) => {
  /**
   * Recieve a JSON object with fields -> firstName, lastName, company, message
   *
   * Timestamp message, store in dynamodb db
   *
   */

  var { firstName, lastName, company, message } = req.body;

  AWS.config.loadFromPath("./src/config/aws.json");

  var ddb = new AWS.DynamoDB({ region: "us-east-2" });

  const time = Date.now() - 1000 * 60 * 60 * 12;

  var query = {
    ExpressionAttributeNames: {
      "#DS": "dateSent",
      "#FN": "firstName",
      "#LN": "lastName",
      "#C": "company",
    },
    ExpressionAttributeValues: {
      ":ds": { N: `${time}` },
    },
    FilterExpression: "dateSent < :ds",
    ProjectionExpression: "#DS, #FN, #LN, #C",
    TableName: "Messages",
  };
  var items = null;

  ddb.scan(query, (err, data) => {
    if (err) {
      return {
        statusCode: 500,
        body: `Err: \n\n ${JSON.stringify(err)}`,
      };
    } else {
      console.log(data.Items);
      items = data.Items;
    }
  });

  if (!firstName || !lastName || !message) {
    res.json({
      code: 400,
      error: "Bad request",
    });
  }

  AWS.config.loadFromPath("./src/config/aws.json");

  var ddb = new AWS.DynamoDB({ region: "us-east-2" });

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

  ddb.putItem(params, (err, data) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Success: ", data);
    }
  });

  res.status(200).json({ name: "blac" });
};
