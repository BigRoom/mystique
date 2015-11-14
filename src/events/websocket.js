// Make websocket event listeners
// Require in App.js
// Dispatch events from this file

import store from 'store';
// import ws from 'events/ws';

const ws = new WebSocket('ws://45.55.26.234/api/ws?server=server=45.55.26.234:6667&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NDc3Mzc2NjgsImlkIjoxfQ.8xwTncbJvf-zd5fO2TK0IWI6g4q_GInJQuvj0SxfzIA');

ws.onopen(function () {
  console.log(ws);
  // ws.send('test');
});

// ws.onmessage((message) => {
//   console.log(message);
// });
