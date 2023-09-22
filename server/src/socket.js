//import { createServer } from 'http';
import { Server } from 'socket.io';
//const server = createServer();
const io = new Server({ cors: { origin: 'https://ordr.onrender.com/' } });

io.on('connection', (socket) => {
  console.log('client connected via SOCKET');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

export { io };
