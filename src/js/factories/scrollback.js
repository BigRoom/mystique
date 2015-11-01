(function() {
    'use strict';

    angular.module('app.factories.scrollback', []).
        factory('scrollback', Scrollback);

    Scrollback.$inject = ['$http', 'connection'];

    function Scrollback($http, connection) {
        var methods = {
            get: function(offset, cb) {
                connection.getHost(function(host) {
                    connection.getToken(function(token) {
                        var ip = host + '%3A6667';
                        var url = '/api/servers/' + ip + '/roomtest/scrollback';

                        $http.get(url, {
                            params: {
                                'offset': offset,
                                'access_token': token
                            }
                        }).
                        then(function(data) {
                            cb.call(this, data);
                        });
                    });
                });
            }
        };

        return methods;
    }
})();
