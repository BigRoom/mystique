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
        ws.send({
            name: 'SET',
            message: 'chat.freenode.net:6667/#roomtest'
        });
    });

    var methods = {
        sendMessage: function(message) {
        }
    };

    return methods;
}]);

app.controller('homeController', ['$scope', 'Data', function($scope, data) {
    $scope.message = 'Hello';
}]);

