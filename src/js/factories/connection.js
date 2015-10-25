(function () {
    'use strict';

    angular.module('app.factories.connection', []).
        factory('connection', Connection);

    Connection.$inject = ['modals', 'authentication'];

    function Connection(modals, authentication) {
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
            },
            getToken: function(cb, override) {
                var token = localStorage.token;
                if (token === undefined || override) {
                    modals.login(function(token) {
                        methods.valid(token, cb);
                    });

                    return;
                }

                methods.valid(token, cb);
            },
            valid: function(token, cb) {
                authentication.validate(token, function(ok) {
                    if (!ok) {
                        methods.getToken(cb, true);
                        return;
                    }

                    cb.call(this, token);
                });
            }

        };

        return methods;
    }
})();
