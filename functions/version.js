const VersionNumber = require("./versionNumber");

exports.handler = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: VersionNumber,
  };
};
