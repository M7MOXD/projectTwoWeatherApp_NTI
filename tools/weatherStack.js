// require request
const request = require("request");

// WeatherStack;
const weatherStk = (latitude, longtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b08d74fd3656a804797907d8c157f149&query=${latitude},${longtitude}`;
  request({ url, json: true }, (error, response) => {
    // Low Level Erroe: Internet Connection/Wrong Url
    if (error) {
      callback(error, undefined);
    }
    // Bad request: Invalid API Key/Missing Query/etc
    else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      callback(
        undefined,
        `It's ${response.body.current.weather_descriptions[0]} now in ${response.body.location.country} It is ${response.body.current.temperature} degree`
      );
    }
  });
};

// export weatherStk
module.exports = weatherStk;
