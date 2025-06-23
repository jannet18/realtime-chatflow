const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected!", socket.id);
});

socket.on("disconnect", () => {
  console.log("A user disconnected", socket.id);
});

server.listen(3000, () => {
  console.log("Listening on *:8000");
});

export { io, server, app };
