const packageJson = require("../package.json");

exports.handler = async (event) => {
  console.log("packageJson", packageJson);
  console.log("event", event);
  const version = packageJson?.version;
  return {
    statusCode: 200,
    body: version,
  };
};
