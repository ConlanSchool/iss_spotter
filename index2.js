const { nextIssTimesForMyLocation } = require("./iss_promised");

nextIssTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });
