const net = require("net");

const client = net.createConnection({ port: 8080 }, () => {
  console.log("You are connected");
  client.write("Welcome");
});
