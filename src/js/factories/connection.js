(function () {
    'use strict';

    angular.module('app.factories.connection', []).
        factory('connection', Connection);

    Connection.$inject = ['authentication'];

    function Connection(authentication) {
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
            getToken: function(cb) {
                var token = localStorage.token;
                if (token === undefined || token === 'undefined') {
                    console.log('py');
                    vex.dialog.open({
                        message: 'Enter your login:',
                        input: $('#auth').html(),
                        callback: function(data) {
                            console.log(data);

                            authentication.login(data.username, data.password,
                                    function(token) {
                                        if (cb !== undefined) {
                                            cb.call(this, token);
                                        }                           
                                    });
                        },
                        buttons: [
                            $.extend({}, vex.dialog.buttons.YES, {
                                text: 'Login'
                            })
                        ]
                    });

                    localStorage.token = token;
                }

                return token;
            }
        };

        return methods;
    }
})();
