const fs = require("fs");

exports.handler = async (event, context, callback) => {
  try {
    const packageJSON = await fs.readFileSync(
      __dirname + "/../package.json",
      "utf8"
    );

    return {
      statusCode: 200,
      body: packageJSON?.version,
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: "Failed",
    };
  }
};
