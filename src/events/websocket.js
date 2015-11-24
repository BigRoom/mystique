// Make websocket event listeners
// Require in App.js
// Dispatch events from this file

// You have to full reload for changes in this file to apply
// (will fix later, have no clue why)
// probably has something to do with not being side effect less

import store from 'store';
import ws from 'events/ws';
import { bindActionCreators } from 'redux';
import * as chatActions from 'actions/chat';
import { observeStore } from 'utils';

const actions = bindActionCreators(chatActions, store.dispatch);

ws.onopen = (event) => {
  // TODO Implement authentication via websockets
  // ws.sendmsg('bargle', { test: 'hi' });
};

const select = (state) => state.messages

let unsubscribe = observeStore(store, select, (state) => {
  let message = state[state.length - 1];
  if(state.length && !message.sent) {
    ws.sendmsg('message', message);
    actions.sent_message(state.length - 1);
  }
});

// Handle the incoming messages
// raw_msg is for debugging purposes only, it has no corresponding reducer
ws.onmessage = (message) => {
  const msg = JSON.parse(message.data);
  switch(msg.name) {
    case 'MESSAGE':
      actions.message_received(msg);
    break;
    case 'CHANNELS':
      actions.channel_received(msg);
    break;
    default:
      actions.raw_msg(msg);
  }
}
