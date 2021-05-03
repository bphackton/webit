import * as config from 'config';
import * as express from 'express';
import * as http from 'http';
import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import { Server, Socket } from 'socket.io';
import { WebSocketEvents } from './app/web-socket-events';
import { Token } from './app/token';

const port = config.get('port') || 3000;
const host = config.get('host') || 'localhost';
const app = express();
const httpServer = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//websocket
const io = new Server(httpServer, {
  path: '/ws',
  transports: ['websocket']
});

const authTokens: Map<string, Token> = new Map();

const getAuthToken = (socket) => {
  let tokenStr = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 100; i++) {
    tokenStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  const t = { token: tokenStr, expires: Date.now() };
  authTokens.set(socket.id, t);
  return tokenStr;
};

io.on(WebSocketEvents.Connection, (socket: Socket) => {
  console.log('connection init: ', socket.id);
  socket.on(WebSocketEvents.TokenRequest, () => {
    socket.emit(WebSocketEvents.Token, getAuthToken(socket));
  });
  socket.on(WebSocketEvents.Disconnect, () => {
    console.log('socket disconnect: ', socket.id);
  });
});



app.use(express.static(config.get('staticFolder'), {index: false}));
let content;
app.get('/*', (req: Request, res: Response) => {
  if (!content) content = fs.readFileSync(`${config.get('staticFolder')}/index.html`, 'utf8');
  console.log('>>> Inside Get /* : ', req.originalUrl);
  res.send(content);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Exception', err);
  res.status(500).send(err);
});

httpServer.listen(port, () => {
  return console.log(`Listening at http://${host}:${port}`);
});

httpServer.on('error', console.error);
