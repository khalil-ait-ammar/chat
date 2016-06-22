var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

user=[];
connections=[];

server.listen( 3000, function () {
    console.log('Server is listening on 3000');
});



app.use('/', express.static(__dirname + "/public"));



io.on('connection', function (socket) {
    console.log('a user connected', socket.id);
    connections.push(socket);
    console.log('connected: %s ', connections.length);



    socket.on('disconnect', function (data) {
        connections.splice(connections.indexOf(socket),1)
        console.log('user disconnected');
    });




});

