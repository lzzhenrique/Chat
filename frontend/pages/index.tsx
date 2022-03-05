import React, { useEffect, useState } from 'react';
import { useSockets } from '../context/socketContext';

export default function Home() {
  const { socket } = useSockets();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    console.log(socket);
    setUserId(socket.id);
  });

  return (
    <div>
      <h1>Chat</h1>
      <p>{ userId }</p>
    </div>
  );
}
