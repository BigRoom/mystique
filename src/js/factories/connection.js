(function () {
    'use strict';

    angular.module('app.factories.connection', []).
        factory('connection', Connection);

    Connection.$inject = ['$http', 'modals', 'authentication'];

    function Connection($http, modals, authentication) {
        var methods = {
            setHost: function(addr) {
                localStorage.addr = addr;
            },
            getHost: function(cb) {
                $http.get('/api/servers/default').
                then(function(resp) {
                    if (resp.data.status.error) {
                        return alert('Could not connect to Big Room');
                    }

                    cb.call(this, resp.data.data.server);
                });
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
                authentication.validate(token, function(ok, user) {
                    if (!ok) {
                        methods.getToken(cb, true);
                        return;
                    }

                    cb.call(this, token, user);
                });
            }

        };

        return methods;
    }
})();
