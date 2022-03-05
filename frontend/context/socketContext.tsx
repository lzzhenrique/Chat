/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext } from 'react';
import io from 'socket.io-client';
import SOCKET_URL from '../config/default';

const socket = io(SOCKET_URL);

const socketContext = createContext({ socket });

function SocketsProvider(props: any) {
  return <socketContext.Provider value={{ socket }} {...props} />;
}

export const useSockets = () => useContext(socketContext);

export default SocketsProvider;
