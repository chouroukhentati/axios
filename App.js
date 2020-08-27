const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
app.listen(port, function (err) {
  if (err) console.log("server is not running");
  else console.log("server is running");
});

app.get("/Italy", (req, res) => {
    requestItaly
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });
  app.get("/London", (req, res) => {
    requestLondon
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });

  const requestItaly = axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=Italy&APPID=90066c1ded495762d56240881de66b4a"
  );
  const requestLondon = axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=90066c1ded495762d56240881de66b4a"
  );
  axios
  .all([requestItaly, requestLondon])
  .then(
    axios.spread((Italy, London) => {
      console.log(Italy.data, London.data);
    })
  )
  .catch((errors) => {
    console.error(errors);
  });
