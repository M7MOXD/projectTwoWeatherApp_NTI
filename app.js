// require tools
const x = require("./tools/mapBox");
const y = require("./tools/weatherStack");

// Weather Function
// Get Country Name
const location = process.argv[2];
// console.log(process.argv);
x(location, (error, data) => {
  console.log("error:", error);
  console.log("data:", data);
  y(data.latitude, data.longtitude, (error, data) => {
    console.log("error:", error);
    console.log("data:", data);
  });
});
