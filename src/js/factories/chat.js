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
                console.log('create');
                ws = $websocket(url + $.param({
                    'server': ircHost,
                    'access_token': token
                }));

                $rootScope.logs = {};

                ws.onMessage(function(message) {
                    var d = JSON.parse(message.data);
                    console.log(d);
                    switch (d.name) {
                        case 'MESSAGE':
                            if ($rootScope.logs[d.contents.channel] === undefined) {
                                $rootScope.logs[d.contents.channel] = [];
                            }

                            $rootScope.logs[d.contents.channel].push(d.contents);

                            break;
                        case 'CHANNELS':
                            for (var i = 0; i < d.contents.channels; i++) {
                                $rootScope.logs[d.contents.channels[i]] = [];
                            }

                            break;
                        default:
                            console.log('Unkown message was sent');
                    }
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
