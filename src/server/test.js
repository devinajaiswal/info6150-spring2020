async function consoleTest() {
  var rp = require("request-promise");
  var options = {
    uri: "http://api.travelpayouts.com/v1/prices/cheap",
    qs: {
      destination: "HKT",
      origin: "MOT",
      token: "ee5e3a59b78d121e99fd83e4420d6ccd"
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    json: true // Automatically parses the JSON string in the response
  };
  var temp;
  await rp(options)
    .then(function(repos) {
      console.log("User has %d repos", repos.length);
      temp = repos;
    })
    .catch(function(error) {
      // API call failed...
      console.log(error);
      temp = ">>>";
    });
  return temp;
}
export { consoleTest };
