const express = require('express');
const SocketManager = require('./socket');
const app = express();
const server = require('http').createServer(app);
const {initSpotifyApi} = require('./API/spotify');
let io = (module.exports.io = require('socket.io')(server));

const PORT = process.env.PORT || 3231;
const HOST = process.env.HOST || '0.0.0.0';

// Отслеживание входящих запросов
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.path}`);
  return next();
});

async function start() {
  await initSpotifyApi();

  io.on('connection', SocketManager);
  
  server.listen(PORT, HOST, () => {
    console.log('Connected to port: ' + PORT + ' host: ' + HOST);
  });
}

start();
