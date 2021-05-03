import * as config from 'config';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

const port = config.get('port') || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

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

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
