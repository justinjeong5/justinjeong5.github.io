import io from 'socket.io-client';
import { SERVER_URL } from '../../config/key'

let socket;

export const initiateSocket = () => {
  socket = io(SERVER_URL, { withCredentials: true });
}

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
}

export const subscribeChat = (callback) => {
  if (socket) socket.on('returnMessage', payload => {
    if (payload.error) return callback(payload);
    return callback(null, payload);
  });
}

export const sendChat = (payload) => {
  if (socket) socket.emit('submitMessage', payload);
}

export const detectError = () => {
  if (socket) socket.on('SocketError', payload => {
    console.error(payload);
  });
}

export const createChatRoom = (payload) => {
  if (socket) socket.emit('createChatRoom', payload)
}

export const subscribeChatRoom = (callback) => {
  if (socket) socket.on('returnChatRoom', payload => {
    if (payload.error) return callback(payload);
    return callback(null, payload);
  });
}
