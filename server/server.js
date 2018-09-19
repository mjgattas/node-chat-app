require('./config/config.js');

const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'Hey. What is going on',
    createdAt: 123
  });

  socket.emit('newMessage', {
    from: 'Mike',
    text: 'whats good, wanna eat?',
    createdAt: Date.now()
    }
  );

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  });

});


server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

module.exports = { app };
