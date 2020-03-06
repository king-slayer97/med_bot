var app = require('express')();

var api = require('./api');

var fromClient = function(app) {
var io = require('socket.io')(app);
io.on('connection', function (socket) {
  socket.on('fromClient', function (data) {
    console.log(data.client);
         api.getRes(data.client).then(function(res){
           console.log('response', res);
            socket.emit('fromServer', { server: res });
         });
  });
});
}
module.exports = {fromClient}
