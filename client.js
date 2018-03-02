const net = require("net");

const client = net.createConnection({ port: 8080 }, () => {
  console.log("You are connected");
  client.on("data", data => {
    process.stdin.pipe(client);
    client.pipe(process.stdout);
  });
  client.on("end", () => {
    console.log("Bye");
  });
});
