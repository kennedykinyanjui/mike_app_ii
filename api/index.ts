const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const ip = req.ip.replace(/^.*:/, ''); // Extract IP address from req.ip
  const reversedIp = ip.split('.').reverse().join('.');
  res.send(`Reversed IP Address: ${reversedIp}`);
});


app.listen(port, () => console.log("Server ready on port 3000."));

module.exports = app;