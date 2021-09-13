const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: "*" });

let waitingRoom = [];

//app setup

server.listen(4000, async () => {
  console.log("listening to request on port 4000");
});

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    let rooms = Array.from(socket.rooms);
    if (socket.rooms.size > 1) {
      socket.broadcast.to(rooms[1]).emit("leave_room");
    }
  });
  if (waitingRoom.length > 0) {
    console.log();
    socket.join(`${socket.id}_room`);
    waitingRoom[0].join(`${socket.id}_room`);
    waitingRoom = waitingRoom.slice(1);
  } else {
    waitingRoom.push(socket);
    socket.emit("joined_room");
    console.log(`${socket.id} is waiting`);
  }
  socket.on("message", async (props) => {
    let rooms = Array.from(socket.rooms);
    if (socket.rooms.size > 1) {
      socket.broadcast.to(rooms[1]).emit("message", props);
    }
  });
});
