const request = require("request-promise-native");

const fetchMyIP = function () {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function (body) {
  const ip = JSON.parse(body).ip;
  return request(`https://ipwho.is/${ip}`);
};

const fetchIssFlyOverTimes = function (body) {
  const { latitude, longitude } = JSON.parse(body);
  return request(
    `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  );
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchIssFlyOverTimes };
