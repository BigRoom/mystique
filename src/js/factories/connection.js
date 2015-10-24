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
                    vex.dialog.open({
                        message: 'Enter your login:',
                        input: $('#auth').html(),
                        callback: function(data) {
                            console.log('In callback with data %s', data);
                            if (data === false) {
                                return;
                            }

                            authentication.login(data.username, data.password,
                                function(token) {
                                    if (cb !== undefined) {
                                        cb.call(this, token);
                                    }                           
                                });
                        },
                        buttons: [
                            $.extend({}, vex.dialog.buttons.NO, {
                                click: function(e) {
                                    console.log(e.data());
                                    vex.closeByEscape(e.data().vex.id);

                                    setTimeout(function() {
                                        methods.openRegister(cb);
                                    }, 250);
                                },
                                text: 'Nope. Register'
                            }),
                            $.extend({}, vex.dialog.buttons.YES, {
                                text: 'Login'
                            })
                        ]
                    });

                    localStorage.token = token;
                }

                return token;
            },
            openRegister: function(cb) {
                vex.dialog.open({
                    message: 'Register',
                    input: $('#auth').html() +
                         '<input type="email" name="email"' +
                         ' placeholder="email"/>',
                    callback: function(data) {
                        console.log(data);
                        authentication.register(
                            data.username,
                            data.password,
                            data.email,
                            cb
                        );
                    },
                    buttons: [
                        $.extend({}, vex.dialog.buttons.NO),
                        $.extend({}, vex.dialog.buttons.YES)
                    ]
                });

            }

        };

        return methods;
    }
})();
