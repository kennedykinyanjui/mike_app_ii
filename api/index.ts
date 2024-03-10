const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
//   const ip = req.ip.replace(/^.*:/, ''); // Extract IP address from req.ip
//   const reversedIp = ip.split('.').reverse().join('.');
//   res.send(`Reversed IP Address: ${reversedIp}`);

    // Get the requester's IP address
    const ip_address = req.ip.split(':').pop(); // Extract IP address and remove IPv6 prefix
    // Reverse the IP address
    const reversed_ip = ip_address.split('.').reverse().join('.');
    res.send(`Reversed Origin IP Address: ${reversed_ip}`);
});

app.listen(port, () => console.log("Server ready on port 3000."));

module.exports = app;



// app.get('/', (req, res) => {
//     // Get the requester's IP address
//     const ip_address = req.ip.split(':').pop(); // Extract IP address and remove IPv6 prefix
//     // Reverse the IP address
//     const reversed_ip = ip_address.split('.').reverse().join('.');
//     res.send(Reversed Origin IP Address: ${reversed_ip});
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(Server is running on port ${PORT});
// });