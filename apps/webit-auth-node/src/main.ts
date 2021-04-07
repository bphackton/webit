import * as express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  path: '/ws',
  transports: ['websocket']
});

io.on('connection', (socket: Socket) => {
  socket.on('event', (data) => {
    console.log(data);
  });
  socket.on('disconnect', (reason) => {
    console.log(reason);
  });
});

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to webit-auth-node!' });
});

const port = process.env.port || 3333;
httpServer.listen(port,() => {
  console.log(`Listening at http://localhost:${port}/api`);
});

httpServer.on('error', console.error);
