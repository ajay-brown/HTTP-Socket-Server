const net = require("net");
const fs = require("fs");
const PORT = 80;

let d = new Date().toUTCString();
const client = net.createConnection(PORT, process.argv[2].toString(), () => {
  console.log("You are connected");
  //headers
  client.write(`GET /${process.argv[2].toString()} HTTP/1.1`);
  client.write(`Host: ${process.argv[2].toString()}\n`);
  client.write("Connection: Keep-Alive \n");
  client.write("Accept: text/html, application/json \n");
  client.write(`Date: ${d} \n`);
  client.write(`User-Agent: ${process.argv[1]}`);
  client.on("data", data => {
    // process.stdin.pipe(client);
    console.log("THIS IS DATA \n", data.toString());
    // client.pipe(process.stdout);
    client.end();
  });
  client.on("end", () => {
    console.log("Bye");
  });
});
