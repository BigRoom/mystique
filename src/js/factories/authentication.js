(function() {
    'use strict';

    angular.module('app.factories.authentication', [])
        .factory('authentication', Authentication);

    Authentication.$inject = ['$http'];
    function Authentication($http) {
        var methods = {
            login: function(username, password, cb) {
                $http.get('/api/users', {
                    params: {
                        'username': username,
                        'password': password
                    }
                }).
                then(function(data) {
                    console.log(data);
                    if (cb !== undefined) {
                        cb.call(this, data.data.data);
                    }                           
                });
            },
            register: function(username, password, email, cb) {
                $http.post('/api/users', {},
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
            },
            validate: function(token, cb) {
                $http.get('/api/users/me', {
                    'access_token': token
                }).
                then(function(data) {
                    var ok = !data.status.error;
                    var user = data.data;

                    cb.call(this, ok, user);
                });
            }
        };

        return methods;
    }
})();
