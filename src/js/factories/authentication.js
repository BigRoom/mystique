(function() {
    'use strict';

    angular.module('app.factories.authentication', [])
        .factory('authentication', Authentication);

    Authentication.$inject = ['$http'];
    function Authentication($http) {
        var methods = {
            login: function(username, password, cb) {
                $http.get('http://192.168.99.100' + ':6060/users', {
                    params: {
                        'username': username,
                        'password': password
                    }
                }).
                then(function(data) {
                    console.log(data);
                    cb.call(null, data.data.data);
                });
            },
            register: function(username, password, email, cb) {
                $http.post('http://192.168.99.100' + ':6060/users', {},
                {
                    params: {
                        'username': username,
                        'password': password,
                        'email': email
                    }
                }
                ).
                then(function(data) {
                    console.log(data);
                    methods.login(username, password, cb);
                });
            }
        };

        return methods;
    }
})();
