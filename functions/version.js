import packageJSON from "../package.json";

exports.handler = async (event) => {
  console.log("event", event);
  const version = packageJSON?.version;
  return {
    statusCode: 200,
    body: version,
  };
};
