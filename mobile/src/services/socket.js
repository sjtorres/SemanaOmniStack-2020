import socketio from 'socket.io-client';

const socket = socketio('http://192.168.1.7:3333', {
  autoConnect: false,
});

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };
  
  socket.connect();
}

function disconnect() {
  if (socket.connect) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
};