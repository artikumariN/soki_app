'use strict';
var servicename = 'authentiation';

    var dependencies = ["main.acl.authorization", "main.api.url","main.user.skvDetails", "$log", "$http","$state"];

    function service(skAuth, skUrl, userDetails, $log, $http,$state) {

        /* Login Function
        ------------------------------------------------ */
        var login = function(user, pass) {
            //Check whether authorization exists
            var authStats = skAuth.getAuth();
            if (authStats !== "" || authStats !== undefined) {

                //Auth header exists. So Login
                var params = {
                    header: skAuth.getHeader(),
                    cache:false,
                    data: {
                        username: user,
                        password: pass
                    },
                    url: skUrl.getUrl("login")
                };

                //Get the data
                return $http(params);

            } else {
                return false;
            }
        };

        /* ------------------------------------------------ */

        return {
            login: login
        };

    }
    service.$inject = dependencies;
    appUser.factory(appUser.name + '.' + servicename, service);
