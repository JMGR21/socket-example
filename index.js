const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log('new client connected');
});

httpServer.listen(3000, () => {
  console.log('listening on *:3030');
});