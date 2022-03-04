import { Server, Socket } from 'socket.io';
import log from '../logger/logger';
import events from './events';

function socket({ io }: { io: Server }) {
  log.info('Sockets enabled');

  io.on(events.connection, (user: Socket) => {
    log.info(`user connected ${user.id} `);
  });
}

export default socket;
