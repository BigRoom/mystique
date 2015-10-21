(function () {
    'use strict';

    angular.module('app.factories.connection', []).
        factory('connection', Connection);

    Connection.$inject = [];

    function Connection() {
        var methods = {
            setHost: function(addr) {
                localStorage.addr = addr;
            },
            getHost: function() {
                var addr = localStorage.addr;
                if (addr === undefined) {
                    addr = prompt('Enter the Big Room host');
                    methods.setHost(addr);
                }

                return addr;
            }
        };

        return methods;
    }
})();
