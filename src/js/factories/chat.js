(function() {
    'use strict';

    angular.module('app.factories.chat', []).
        factory('chat', Chat);

    Chat.$inject = ['$websocket', '$rootScope', 'connection', 'scrollback'];
    function Chat($websocket, $rootScope, connection, scrollback) {
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
                for (var i = 0; i < d.length; i++) {
                    console.log(d[i]);
                    if ($rootScope.logs[d[i]] === undefined) {
                        $rootScope.logs[d[i]] = [];
                    }
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

                function doScrollback(page) {
                    scrollback.get(page, function(data) {
                        (function(page) {
                            console.log('scrollback activated');
                            console.log(data);
                            for (var i = 0; i < data.data.data.length; i++) {
                                var msg = data.data.data[i];

                                $rootScope.logs['#roomtest'].unshift({
                                    'from': msg.User,
                                    'content': msg.Content,
                                });
                            }

                            var c = angular.element('.chat-block');

                            setTimeout(function() {
                                c.scrollTop(c.height());
                            }, 50);

                            doScrollback(page + 1);
                        })(page);
                    });
                }

                doScrollback(0);
            });

        });

        return methods;
    }
})();
