const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('connection opened');
});

io.on('connection', (socket) => {
  console.log('new client', socket);
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://casamagoswiss.ddns.net:${port}/`);
});