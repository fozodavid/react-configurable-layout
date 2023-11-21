const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*'}});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Simulate data streaming (replace this with your data source)
  setInterval(() => {
    const randomValue = Math.floor(Math.random() * 15) + 50;
    socket.emit('energyConsumption', randomValue);
  }, 500);

  setInterval(() => {
    const randomValue = Math.floor(Math.random() * 30) + 50;
    socket.emit('throughput', randomValue);
  }, 500);

  setInterval(() => {
    const randomValue = Math.floor(Math.random() * 20) + 80;
    socket.emit('grindingEfficiency', randomValue);
  }, 500);

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
