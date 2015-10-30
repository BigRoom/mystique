(function() {
    'use strict';

    angular.module('app.factories.chat', []).
        factory('chat', Chat);

    Chat.$inject = ['$websocket', '$rootScope', 'connection'];
    function Chat($websocket, $rootScope, connection) {
        var ws;
        var methods = {};

        var handlers = {
            'MESSAGE': function(d) {
                if ($rootScope.logs[d.channel] === undefined) {
                    $rootScope.logs[d.channel] = [];
                }

                $rootScope.logs[d.channel].push(d);
            },
            'CHANNELS': function(d) {
                console.log(d, d.length);
                for (var i = 0; i < d.length; i++) {
                    console.log(d[i]);
                    $rootScope.logs[d[i]] = [];
                }
            }
        };

        connection.getHost(function(host) {
            var ircHost = host + ':6667';

            var url = 'ws://' + host + '/api/ws?';

            connection.getToken(function(token, user) {
                $rootScope.user = user;
                console.log('create');
                ws = $websocket(url + $.param({
                    'server': ircHost,
                    'access_token': token
                }));

                $rootScope.logs = {};

                ws.onMessage(function(message) {
                    var d = JSON.parse(message.data);
                    handlers[d.name].call(this, d.contents);
                });

                ws.onOpen(function() {
                    console.log('WebSocket opened!');
                    ws.send({
                        name: 'SET',
                        message: ircHost + '/' + $rootScope.selected
                    });

                    ws.send({
                        name: 'CHANNELS'
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
