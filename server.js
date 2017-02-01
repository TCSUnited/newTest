var express = require('express')
var path = require('path')
var http = require('http');

var app = express()
var port = process.env.PORT || 3000;

app.use('/',express.static(path.join(__dirname, '/dist')));

const server = http.createServer(app);
server.listen(port, () => console.log(`Application is running on localhost:${port}`));
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('notify', function () {
    socket.emit('notifyChanges', { msg: 'Changes in couchbase' });
  })
})
