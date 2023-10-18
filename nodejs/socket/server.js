const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Create an HTML file for the client.
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages from the client
  socket.on('chat message', (msg) => {
    console.log('Message from client:', msg);

    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
