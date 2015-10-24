(function() {
    'use strict';

    angular.module('app.factories.modals', []).
        factory('modals', Modals);

    Modals.$inject = ['authentication'];

    function Modals(authentication) {
        var methods = {
            login: function(cb) {
                console.log('opening');
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

                                    localStorage.token = token;
                                });
                    },
                    buttons: [
                        $.extend({}, vex.dialog.buttons.NO, {
                            click: function(e) {
                                console.log(e.data());
                                vex.closeByEscape(e.data().vex.id);

                                setTimeout(function() {
                                    methods.register(cb);
                                }, 250);
                            },
                            text: 'Nope. Register'
                        }),
                        $.extend({}, vex.dialog.buttons.YES, {
                            text: 'Login'
                        })
                    ]
                });
            },
            register: function(cb) {
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
