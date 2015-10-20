(function() {
    'use strict';

    // This is my local Docker IRC server
    var defaultHost = '192.168.99.100:6667';

    angular.module('app.factories.chat', []).
        factory('chat', Chat);

    Chat.$inject = ['$websocket', '$rootScope'];
    function Chat($websocket, $rootScope) {
        var ws = $websocket('ws://localhost:6060?server=' + defaultHost);

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
                message: defaultHost + '/#roomtest'
            });
        });

        var methods = {
            sendMessage: function(message) {
                ws.send({
                    name: 'SEND',
                    message: message,
                    channel: defaultHost + '/#roomtest'
                });
            }
        };

        return methods;
    }
})();
