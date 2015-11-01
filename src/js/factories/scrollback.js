(function() {
    'use strict';

    angular.module('app.factories.scrollback', []).
        factory('scrollback', Scrollback);

    Scrollback.$inject = ['$http', 'connection'];

    function Scrollback($http, connection) {
        var methods = {
            get: function(page, cb) {
                connection.getHost(function(host) {
                    connection.getToken(function(token) {
                        var ip = host + '%3A6667';
                        var url = '/api/servers/' + ip + '/roomtest/scrollback';

                        $http.get(url, {
                            params: {
                                'page': page,
                                'access_token': token
                            }
                        }).
                        then(function(data) {
                            if (data.data.status.error) {
                                return;
                            }

                            if (data.data.data === null) {
                                return;
                            }

                            if (data.data.data.length === 0) {
                                console.log('No results!');
                                return;
                            }

                            cb.call(this, data);
                        });
                    });
                });
            }
        };

        return methods;
    }
})();
