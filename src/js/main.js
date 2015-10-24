(function() {
    'use strict';

    angular.module('room', [
            'angular-websocket',
            'app.controllers.home',
            'app.factories.chat',
            'app.factories.connection',
            'app.factories.authentication'
    ]);
})();
