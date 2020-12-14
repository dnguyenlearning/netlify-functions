const shared = require("./shared");

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: shared.VERSION,
  };
};
