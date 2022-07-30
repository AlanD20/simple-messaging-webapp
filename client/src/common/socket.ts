import config from './config';
import { io } from 'socket.io-client';

export const socket = io(config.ws);

socket.on('connect', () => console.log('Connected to:', socket?.id));
