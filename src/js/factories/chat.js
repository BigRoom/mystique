(function() {
    'use strict';

    angular.module('app.factories.chat', []).
        factory('chat', Chat);

    Chat.$inject = ['$websocket', '$rootScope', 'connection'];
    function Chat($websocket, $rootScope, connection) {
        var host = connection.getHost();
        var ircHost = host + ':6667';

        var url = 'ws://' + host + ':6060/ws?';
        var ws;

        connection.getToken(function(token) {
            ws = $websocket(url + $.param({
                'server': ircHost,
                'access_token': token
            }));

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
                    message: ircHost + '/#roomtest'
                });

                methods.setNick('paked');
            });

        });

        var methods = {
            sendMessage: function(message) {
                ws.send({
                    name: 'SEND',
                    message: message,
                    channel: ircHost + '/#roomtest'
                });
            },
            setNick: function(nick) {
                ws.send({
                    name: 'NICK',
                    message: nick
                });
            },
            _send: function(obj) {
                ws.send(obj);
            }
        };

        return methods;
    }
})();
