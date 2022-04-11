const path = require("path");
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
   console.log("New WS Connection...");
});

server.listen(port, () => {
  console.log('listening on PORT: ' + port);
});
