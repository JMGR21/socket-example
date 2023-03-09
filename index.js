const { Server } = require("socket.io");

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  console.log('connected');
});

io.listen(3030);