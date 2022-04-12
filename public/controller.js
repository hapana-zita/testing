const socket = io();

let motion = false;
let ios = false;

function getAccel(){
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission()
      .then(function() {
        console.log('DeviceMotionEvent enabled');

        motion = true;
        ios = true;
      })
      .catch(function(error) {
        console.warn('DeviceMotionEvent not enabled', error);
      })
  } else {
    // we are not on ios13 and above
    // todo
    // add detection for hardware for other devices
    // if(got the hardware) {
    // motion = true;
    // }
  }
}

if (motion) {
  window.addEventListener('devicemotion', (event) => {
    if (event.acceleration) {
      socket.emit('motion', event.acceleration.y);
  });
}
