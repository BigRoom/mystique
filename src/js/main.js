var ws = new WebSocket('ws://localhost:6060');

ws.onopen = function() {
    console.log('Opened!');
    ws.send("SETchat.freenode.net:6667/#roomtest")
}

ws.onclose = function() {
    console.log('Closed!');
}

ws.onerror = function(error) {
    console.log('We got an error:' + error);
}

ws.onmessage = function(e) {
    var m = document.createElement("p");
    m.textContent = e.data;
    document.body.appendChild(m);
}

