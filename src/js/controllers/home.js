(function() {
    'use strict';

    angular.module('app.controllers.home', []).
        controller('Home', Home);

    Home.$inject = ['chat'];
    function Home(chat) {
        var vm = this;
        vm.message = 'Hello';

        vm.send = function() {
            chat.sendMessage(vm.text);
            vm.text = '';
        };
    }
})();
