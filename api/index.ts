const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // res.send("Express on Vercel")
const ip = req.ip.replace(/^.*:/, ''); // Extract IP address from req.ip
  const reversedIp = ip.split('.').reverse().join('.');
  res.send(`Reversed IP Address: ${reversedIp}`);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;