const http = require('http');
const fs = require('fs');
const path = require("path");
const express = require('express');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
   console.log("New WS Connection...");

   socket.on('motion', msg);

   function msg(motionY) {
     console.log(motionY);
   }
});

server.listen(port, () => {
  console.log('listening on PORT: ' + port);
});
