import express from 'express';
// import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import config from 'config';
import logger from './logger/logger';

const PORT = 3001 || process.env.PORT;
const corsOrigin = config.get<string>('corsOrigin');

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    methods: ['POST', 'GET'],
  },
});

httpServer.listen(PORT, () => {
  logger.info('Server listening');
});
