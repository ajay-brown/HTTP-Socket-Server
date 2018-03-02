const net = require("net");
const fs = require("fs");

const server = net.createServer(c => {
  console.log("client connected");
  //   c.on("end", () => {
  //     console.log("Client disconnected");
  //   });
  c.on("data", data => {
    const dataString = data.toString();
    console.log(dataString);

    console.log(dataString.charAt(5));

    switch (true) {
      case dataString.charAt(5) === "i":
        fs.readFile("./index.html", (err, fd) => {
          if (err) throw err;
          c.write("HTTP/1.1 200 OK\n\n");
          console.log(fd.toString());
          c.write(fd.toString());
          c.end();
        });
        break;
      case dataString.charAt(5) === " ": //back to index
        fs.readFile("./index.html", (err, fd) => {
          if (err) throw err;
          c.write("HTTP/1.1 200 OK\n\n");
          console.log(fd.toString());
          c.write(fd.toString());
          c.end();
        });
        break;
      case dataString.charAt(6) === "y":
        fs.readFile("./hydrogen.html", (err, fd) => {
          console.log(fd.toString());
          c.write("HTTP/1.1 200 OK\n\n");
          if (err) throw err;
          c.write(fd.toString());
          c.end();
        });
        break;
      case dataString.charAt(6) === "e":
        fs.readFile("./helium.html", (err, fd) => {
          console.log(fd.toString());
          c.write("HTTP/1.1 200 OK\n\n");
          if (err) throw err;
          c.write(fd.toString());
          c.end();
        });
        break;
      case dataString.charAt(5) === "s": //styles.css
        c.write("HTTP/1.1 200 OK\n\n Content-Type: text/css \n\n");
        fs.readFile("./styles.css", (err, fd) => {
          console.log(fd.toString());
          c.write(fd.toString());
          if (err) throw err;
        });
      case dataString.charAt(5) === "f": //handling favicon
        c.write("HTTP/1.1 200OK \n\n Content-Type: image/x-icon ");

      default:
        fs.readFile("./404.html", (err, fd) => {
          console.log(fd.toString());
          c.write("HTTP/1.1 200 OK\n\n");
          if (err) throw err;
          c.write(fd.toString());
          c.end();
        });
    }
  });
});
server.on("error", err => {
  throw err;
});
server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
