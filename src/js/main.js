(function() {
    'use strict';

    angular.module('room', [
            'angular-websocket',
            'app.controllers.home',
            'app.controllers.channels',
            'app.factories.chat',
            'app.factories.connection',
            'app.factories.scrollback',
            'app.factories.authentication',
            'app.factories.modals'
    ]);
})();
