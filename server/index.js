const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
require('dotenv').config();

const io = socketIo(server, { cors: { origin: process.env.ALLOWED_ORIGINS}});

io
  .on('connection', (socket) => {
  console.log('A user connected');
  let counter = 0.0

  setInterval(() => {
    counter += .2;
    const randomValue = Math.sin(counter) * 30 + 50;
    socket.emit('energyConsumption', randomValue);
  }, 500);

  setInterval(() => {
    counter += .2;
    const randomValue = Math.sin(counter) * 25;
    socket.emit('throughput', randomValue);
  }, 500);

  setInterval(() => {
    counter += .2;
    const randomValue = Math.sin(counter) * 20 + 60;
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
