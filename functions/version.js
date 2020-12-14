const packageJson = require("../package.json");

exports.handler = async (event) => {
  const version = packageJson?.version;
  return {
    statusCode: 200,
    body: version,
  };
};
