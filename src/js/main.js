/*var ws = new WebSocket('ws://localhost:6060');

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
*/

var app = angular.module('room', [
    'angular-websocket'
]);

app.factory('Data', ['$websocket', '$rootScope', function($websocket, $rootScope) {
    var ws = $websocket('ws://localhost:6060');

    $rootScope.logs = [];

    ws.onMessage(function(message) {
        console.log(message);

        var d = JSON.parse(message.data);
        $rootScope.logs.push(d);
    });

    ws.onOpen(function() {
        console.log('WebSocket opened!');
        ws.send('SETchat.freenode.net:6667/#roomtest');
    });

    var methods = {
        sendMessage: function(message) {
            ws.send(message)
        }
    };

    return methods;
}]);

app.controller('homeController', ['$scope', 'Data', function($scope, data) {
    $scope.message = 'Hello';
}]);

