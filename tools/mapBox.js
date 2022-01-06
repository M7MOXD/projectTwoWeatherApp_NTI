// require request
const request = require("request");

// MapBox
const mapBox = (country, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=pk.eyJ1IjoibTdtb3hkIiwiYSI6ImNreTFiZGVybzA5dWIyb3F0aDQ2YmE2anQifQ.dcEeVe0dA-qL2ZCu5DMe6A`;
  request({ url, json: true }, (error, response) => {
    // Low Level Erroe: Internet Connection/Wrong Url
    if (error) {
      callback(error, undefined);
    }
    // Bad request: Invalid API Key/Missing Query/etc
    else if (response.body.message) {
      callback(response.body.message, undefined);
    }
    // Bad request: Missing Country Name
    else if (response.body.features.length === 0) {
      callback("Wrong Country Name", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longtitude: response.body.features[0].center[0],
      });
    }
  });
};

// export mapBox
module.exports = mapBox;
