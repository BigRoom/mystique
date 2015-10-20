(function() {
    'use strict';

    angular.module('app.factories.chat', []).
        factory('chat', Chat);

    Chat.$inject = ['$websocket', '$rootScope'];
    function Chat($websocket, $rootScope) {
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
                message: 'Chat.freenode.net:6667/#roomtest'
            });
        });

        var methods = {
            sendMessage: function(message) {
                ws.send({
                    name: 'SEND',
                    message: message,
                    channel: 'Chat.freenode.net:6667/#roomtest'
                });
            }
        };

        return methods;

    }
})();
