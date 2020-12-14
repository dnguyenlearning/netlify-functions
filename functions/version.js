const fs = require("fs");
const jsonFilePath = "/package.json";

exports.handler = async (event, context, callback) => {
  const packageJson = await fs.readFileSync(jsonFilePath, "utf8");

  console.log("packageJson", packageJson);

  return {
    statusCode: 200,
    body: "0.0.1",
  };
};
