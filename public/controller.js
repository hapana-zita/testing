const socket = io();

function getAccel(){
    DeviceMotionEvent.requestPermission().then(response => {
      if (response == 'granted') {
        window.addEventListener('devicemotion', (event) => {
          if (event.acceleration) {
            socket.emit('motion', event.acceleration.y);
          }
        });
      }
    });
}
