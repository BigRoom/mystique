// Make websocket event listeners
// Require in App.js
// Dispatch events from this file

// You have to full reload for changes in this file to apply
// (will fix later, have no clue why)
// probably has something to do with not being side effect less

import store from 'store';
import ws from 'events/ws';
import { message_received, channel_received, raw_msg } from 'actions/chat';

ws.onopen = (event) => {
  ws.sendmsg('bargle', { test: 'hi' });
};

ws.onmessage = (message) => {
  const msg = JSON.parse(message.data);
  switch(msg.name) {
    case 'MESSAGE':
      store.dispatch(message_received(msg));
    break;
    case 'CHANNELS':
      store.dispatch(channel_received(msg));
    break;
    default:
      store.dispatch(raw_msg(msg));
  }
}
