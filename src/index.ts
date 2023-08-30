import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/expressRoutes';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 8000;

export const app = express();
export const io = new Server(+PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});


