const http = require("http");

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(` Welcome   `);
});

server.listen(5000, function () {
  "server is running now, you can access this server at http://localhost:5000";
  console.log();
});
