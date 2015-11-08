(function() {
    'use strict';

    angular.module('app.controllers.channels', []).
        controller('Channels', Channels);
    
    Channels.$inject = ['$rootScope', 'chat'];
    function Channels($rootScope, chat) {
        var vm = this;

        $rootScope.selected = '#roomtest';
        vm.select = function(channel) {
            console.log(channel);
            vm.selected = channel;

            $rootScope.selected = channel;
        };

        vm.add = function() {
            vex.dialog.prompt({
                message: 'What planet did the aliens come from?',
                placeholder: 'Planet name',
                callback: function(value) {
                    if (!value) {
                        return;
                    }

                    $rootScope.logs[value] = [];

                    chat.scrollback(value);

                    vm.select(value);

                    chat.join(value);

                    return console.log(value);
                }
            });
        };
    }
})();
