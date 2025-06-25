// import http from "http";
// import express from "express";
// const app = express();
// import { io } from "socket.io";
// const server = http.createServer(app);
// import { Server } from "socket.io";

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173",
//   },
// });

// io.on("connection", (socket) => {
//   console.log("A user connected!", socket.id);
// });

// socket.on("disconnect", () => {
//   console.log("A user disconnected", socket.id);
// });

// server.listen(8000, () => {
//   console.log("Listening on *:8000");
// });

// export { io, server, app };
// const app = require("express")();
// const server = require("http").createServer(app);
// const io = require("socket.io")(server);
// const port = process.env.PORT || 8080;

// io.on("connection", (socket) => {
//   console.log("user connected");
//   socket.on("disconnect", function () {
//     console.log("user disconnected");
//   });
// });

// socket.on("disconnect", () => {
//   console.log("A user disconnected", socket.id);
// });
// server.listen(port, function () {
//   console.log(`Listening on port ${port}`);
// });
import http from "http";
import express from "express";
// import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Or your frontend URL
    // methods: ["GET", "POST"]
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  // socket.on("chat message", (msg) => {
  //   console.log("message: " + msg);
  //   io.emit("chat message", msg); // Broadcast to all connected clients
  // });

  socket.on("disconnect", (socket) => {
    console.log("A user disconnected", socket.id);
  });
});

// server.listen(8000, () => {
//   console.log("listening on *:8000");
// });

export { io, app, server };
