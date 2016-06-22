
$(function () {
    var socket = io.connect();
    var $messageForm = $('#messageForm');
    var $message = $('#message');
    var $chat = $('#chat');

    // recuperation du msg et envoi au server
    $messageForm.submit(function (e) {
        e.preventDefault();
        socket.emit('send message', $message.val());
        $message.val('');
    });


        // affichage du nouveau messsage
        socket.on('new message', function (data) {
            console.log('data',data);
           $chat.append('<div class="well"> '+data.msg+'</div>');
            });

});
