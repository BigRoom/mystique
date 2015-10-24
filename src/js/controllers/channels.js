(function() {
    'use strict';

    angular.module('app.controllers.channels', []).
        controller('Channels', Channels);
    
    Channels.$inject = ['$rootScope'];
    function Channels($rootScope) {
        var vm = this;

        $rootScope.selected = '#roomtest';
        vm.selectChannel = function(channel) {
            vm.selected = channel;
        };
    }
})();
