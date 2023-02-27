const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchIssFlyOverTimes,
} = require("./iss_promised");
//const exampleCoords = { latitude: "49.27670", longitude: "-123.13000" };

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchIssFlyOverTimes)
  .then((body) => console.log(body));
