// Make Connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementByld('message');
    handle = document.getElementByld('handle'),
    btn = document.getElementByld('send'),
    output = document.getElementByld('output'),
    feedback = document.getElementByld('feedback');

    //Emit events

    btn.addEventListener('click', funtion(){
      socket.emit('chat', {
        message: message.value,
        handle: handle.value
      });
    });

    message.AddEventListener('keypress', function(){
      socket.emit('typing', handle.value);
    });

    //Listen for events
    socket.on('chat', function(data){
      feedback.innerHTML = "";
      output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    });

    socket.on('typing', function(data){
      feedback.innerHTML = '<p><em>' + data + ' is typing a message... </em></p>';
    });
