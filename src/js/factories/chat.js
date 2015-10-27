(function() {
    'use strict';

    angular.module('app.factories.chat', []).
        factory('chat', Chat);

    Chat.$inject = ['$websocket', '$rootScope', 'connection'];
    function Chat($websocket, $rootScope, connection) {
        var ws;
        var methods = {};
        connection.getHost(function(host) {
            var ircHost = host + ':6667';

            var url = 'ws://' + host + '/api/ws?';

            connection.getToken(function(token) {
                ws = $websocket(url + $.param({
                    'server': ircHost,
                    'access_token': token
                }));

                $rootScope.logs = {};

                ws.onMessage(function(message) {
                    var d = JSON.parse(message.data);
                    if ($rootScope.logs[d.channel] === undefined) {
                        $rootScope.logs[d.channel] = [];
                    }

                    $rootScope.logs[d.channel].push(d);
                });

                ws.onOpen(function() {
                    console.log('WebSocket opened!');
                    ws.send({
                        name: 'SET',
                        message: ircHost + '/' + $rootScope.selected
                    });
                });

                methods.sendMessage = function(message) {
                    ws.send({
                        name: 'SEND',
                        message: message,
                        channel: ircHost + '/#roomtest'
                    });
                };

                methods.setNick = function(nick) {
                    ws.send({
                        name: 'NICK',
                        message: nick
                    });
                };

                methods._send = function(obj) {
                    ws.send(obj);
                };
            });

        });

        return methods;
    }
})();
