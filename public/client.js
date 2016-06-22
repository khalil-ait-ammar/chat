
$(function () {
    var socket = io.connect();
    var $messageForm = $('#messageForm');
    var $message = $('#message');
    var $chat = $('#chat');
    var messageArea = $('#messageArea');
    var userFormArea = $('#userFormArea');
    var $userForm = $('#userForm');
    var $users= $('#users');
    var $username = $('#username');

    // new user
    $userForm.submit(function (e) {
        e.preventDefault();
        socket.emit('new user', $username.val(),function (data) {
            if(data){
                userFormArea.hide();
                messageArea.show();
            }
        });
        $username.val('');
    });


socket.on('get users', function (data) {
   var html='';
    for (i=0;i<data.length;i++){
        html += '<li class="list-group-item">'+data[i]+'</i>';

    }
    $users.html(html);
});



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
