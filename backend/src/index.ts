import express from 'express'
import cors from 'cors';
import { createServer } from 'http';
import { Socket, Server } from 'socket.io';
import config from 'config';


const PORT = 3001 || process.env.PORT;
const host = config.get<string>("host")
const corsOrigin = config.get<string>("corsOrigin")


const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: corsOrigin,
    methods: ["POST", "GET"]
  }
})

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
