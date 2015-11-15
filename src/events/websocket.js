// Make websocket event listeners
// Require in App.js
// Dispatch events from this file

import store from 'store';

export default function connect(host) {
  const ws = new WebSocket(host);

  ws.onopen(function() {
    console.log('connected');
  });
}
