import io from 'socket.io-client';
import { useState, useEffect } from 'react'
import Login from "./Login"
import Sidebar from './Sidebar';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboad from './Dashboad';
// const socket = io.connect("http://localhost:5000")
import {ContactsProvider} from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
function App() {
  const [id, setId] = useLocalStorage("id")
  return (
    id ? <SocketProvider id={id}>
      <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboad id={id} />
      </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider> :
      <Login onIdSubmit={setId} />
  );
}

export default App;
