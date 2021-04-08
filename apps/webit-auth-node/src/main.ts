import * as express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import * as path from 'path';
import { Response, Request } from 'express';

const app = express();
const port = process.env.port || 3333;
const httpServer = createServer(app);

const io = new Server(httpServer, {
  path: '/ws',
  transports: ['websocket']
});

io.on('connection', (socket: Socket) => {

  socket.emit('generate qr', `http://localhost:${port}/auth/123`);

  app.get('/auth/:id', (req: Request, res: Response) => {
    socket.emit('webit redirect', `http://localhost:${port}`);
    res.status(200).end();
  });

  socket.on('disconnect', (reason) => {
    console.log('disconnect: ',reason);
  });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to webit-auth-node!');
});

app.use('/qr',express.static(path.join(__dirname, 'assets/qr')))

httpServer.listen(port,() => {
  console.log(`Listening at http://localhost:${port}`);
});

httpServer.on('error', console.error);
