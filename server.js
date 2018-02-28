const net = require("net");

const server = net.createServer(c => {
  console.log("client connected");
  c.on("end", () => {
    console.log("Client disconnected");
  });
  c.write("Welcome!");
  c.pipe(c);
});
server.on("error", err => {
  throw err;
});
server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
