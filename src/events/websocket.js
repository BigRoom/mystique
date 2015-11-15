// Make websocket event listeners
// Require in App.js
// Dispatch events from this file

import store from 'store';
import { message_received } from 'actions/websocket';
import ws from 'events/ws';

ws.onopen = (event) => {
  ws.sendmsg('bargle', { test: 'hi' });
};

ws.onmessage = (message) => {
  const msg = {
    data: JSON.parse(message.data),
    timestamp: message.timeStamp
  }
  store.dispatch(message_received(msg));
}
