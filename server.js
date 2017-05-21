var express = require("express");

var server = express();

server.use ( express.static ("."));

server.listen(3000,() => console.log("server started: 3000"));