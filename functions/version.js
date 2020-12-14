var readJson = require("read-package-json");

exports.handler = async (event, context, callback) => {
  readJson("../package.json", console.error, false, function (er, data) {
    if (er) {
      return {
        statusCode: 400,
        body: "Wrong",
      };
    }

    console.log("data", data);
    return {
      statusCode: 200,
      body: "0.0.1",
    };
  });
};
