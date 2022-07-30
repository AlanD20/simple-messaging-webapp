import dotenv from 'dotenv';
import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import UserController from './controllers/UserController';
import MessageController from './controllers/MessagesController';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('connection established!', socket.id);

  socket.on(
    'user:join',
    async (data) => await UserController.join(socket, data)
  );

  socket.on(
    'message:send',
    async (data) => await MessageController.send(io, socket, data)
  );
});

httpServer.listen(PORT, (_) => console.log(`LISTENING TO ${PORT}`));
