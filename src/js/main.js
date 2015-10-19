(function() {
    'use strict';
    angular.module('room', [
            'angular-websocket'
    ]).
        controller('HomeController', HomeController).
        factory('chat', chat);

    chat.$inject = ['$websocket', '$rootScope'];
    function chat($websocket, $rootScope) {
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
                ws.send({
                    name: 'SEND',
                    message: message,
                    channel: 'chat.freenode.net:6667/#roomtest'
                });
            }
        };

        return methods;

    }

    HomeController.$inject = ['chat'];
    function HomeController(chat) {
        var vm = this;
        vm.message = 'Hello';

        vm.send = function() {
            chat.sendMessage(vm.text);
            vm.text = '';
        };
    }
})();
