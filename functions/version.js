const VersionNumber = require("./versionNumber");
const pkjson = require("../package.json");

exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: "Hello a Lynh " + pkjson.version,
  };
};
