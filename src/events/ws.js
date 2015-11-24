const ws = new WebSocket(`ws://${window.location.hostname}:4000`);
// const ws = new WebSocket('ws://echo.websocket.org');
// const ws = new WebSocket('ws://beta.bigroom.com/api/ws?server=45.55.26.234:6667&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NDc3Mzc2NjgsImlkIjoxfQ.8xwTncbJvf-zd5fO2TK0IWI6g4q_GInJQuvj0SxfzIA');

ws.sendmsg = (name, data) => {
  if(ws.readyState === 1) {
    ws.send(JSON.stringify({
      name: name.toUpperCase(),
      ...data
    }));
  } else {
    console.error('websocket not connected, can\'t send messages')
    return false;
  }
};

export default ws;
