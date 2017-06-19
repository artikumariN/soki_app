'use strict';
/*eslint consistent-this:[2,  "skLoginCtrl"] */
var directivename = 'skLogin';


    // controller
    var controllerDeps = ["$log", "$state", "main.user.user", "$timeout", "$ionicHistory", "$scope"];
    var controllerlogin = function($log, $state, User, $timeout, $ionicHistory, $scope) {
        var vm = this;
        vm.user = "many@yopmail.com";
        vm.pass = "qwerty1";
        /* Controller Function: doLogin
        ------------------------------------------------ */

        vm.doLogin = function() {
            User.login(vm.user, vm.pass).then(function(usr) {
                    if (usr.status === 200 && usr.data.data.accessToken) {
                        $timeout(function() {
                            $state.go(vm.skHomestate);
                        }, 100);
                    } else {
                        vm.error = usr.data.message;
                    }
                    console.log(usr);
                },
                function(err) {
                    //Some Error..
                    //console.log("Error", err);
                    vm.error = err.data.message;
                });
        };

        /* ------------------------------------------------ */
    };
    controllerlogin.$inject = controllerDeps;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = [];
    var directive = function() {
        return {
            restrict: 'AE',
            scope: {
                skHomestate: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            controller: controllerlogin,
            controllerAs: 'log',
            bindToController: true,
            templateUrl: 'scripts/user/directives/sk_login.directive.html'
        };
    };
    directive.$inject = directiveDeps;

    appUser.directive(directivename, directive);
