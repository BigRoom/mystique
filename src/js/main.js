(function() {
    'use strict';
    angular.module('room', [
            'angular-websocket',
            'app.controllers.home',
            'app.factories.chat'
    ]);
})();
