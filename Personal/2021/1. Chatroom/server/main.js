const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server, { cors: "*" });

let waitingRoom = [];
Socket.prototype.onclose = function (reason) {
  this.emit("disconnecting", reason); //<--insert the new event here
  this.leaveAll();

  this.emit("disconnect", reason);
};
//app setup

server.listen(4000, async () => {
  console.log("listening to request on port 4000");
});

io.on("connection", async (socket) => {
  async function joinroom() {
    if (waitingRoom.length > 0) {
      socket.join(`${socket.id}_room`);
      waitingRoom[0].join(`${socket.id}_room`);
      waitingRoom[0].emit("found_stranger");
      socket.emit("found_stranger");
      waitingRoom = waitingRoom.slice(1);
    } else {
      waitingRoom.push(socket);
    }
  }

  joinroom();

  socket.on("disconnecting", () => {
    let rooms = socket.rooms;
    console.log(rooms);
    rooms.forEach(function (room) {
      io.in(room).emit("room_ended");
      const clients = io.sockets.adapter.rooms.get(room);
      for (const clientId of clients) {
        const clientSocket = io.sockets.sockets.get(clientId);
        clientSocket.leave(room);
      }
    });
  });

  socket.on("find_room", joinroom);

  socket.on("leave_room", async () => {
    let rooms = Array.from(socket.rooms);
    if (socket.rooms.size > 1) {
      socket.broadcast.to(rooms[1]).emit("room_ended");
    }
  });

  socket.on("message", async (props) => {
    let rooms = Array.from(socket.rooms);
    console.log(socket.id)
    console.log(socket.rooms)
    if (socket.rooms.size > 1) {
      socket.broadcast
        .to(rooms[1])
        .emit("message", { sender: "stranger", content: props });
    }
  });
});
