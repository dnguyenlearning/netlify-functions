const packageJson = require("/package.json");

exports.handler = async (event, context, callback) => {
  console.log("packageJson", packageJson);

  return {
    statusCode: 200,
    body: "0.0.1",
  };
};
