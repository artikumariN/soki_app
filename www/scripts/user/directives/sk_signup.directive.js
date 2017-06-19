'use strict';
/*eslint consistent-this:[2,  "skSignupCtrl"] */
var directivename = 'skSignup';


    // controller
    var controllerDeps = ["$log", "$state", "main.user.user", "$timeout", "$ionicHistory", "$scope"];
    var controller = function($log, $state, User, $timeout, $ionicHistory, $scope) {
        var vm = this;
        vm.user = "";
        vm.pass = "";
        vm.mobile = "";
        vm.name = "";
        vm.error = "";

        /* Controller Function: doSignup
        ------------------------------------------------ */
        // vm.log = function(s){
        //     console.log(s);
        // }
        vm.doSignup = function(form) {
            User.signup(vm.user, vm.pass, vm.name, vm.mobile).then(function(usr) {
                if (usr.status === 200 && usr.data.data.accessToken) {
                    $timeout(function() {
                        vm.user = "";
                        vm.pass = "";
                        vm.mobile = "";
                        vm.name = "";
                        vm.error = "";
                        form.$setUntouched();
                        form.$setPristine();
                        $state.go(vm.skHomestate);
                    }, 100);
                } else {
                    // vm.error = usr.data.message;
                }
            },
            function(err) {
                //Some Error..
                // vm.error = err.data.message;
                vm.serverSideErrorMessage = err.data.message;
            });
        };

        vm.termsAndConditions = function(){
            User.termsConditionsService().then(function(response){
                console.log("controller", response);
            },function(error){
                console.log("Error", error);
            });
        }
        /* ------------------------------------------------ */
    };
    controller.$inject = controllerDeps;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = [];
    var directive = function() {
        return {
            restrict: 'AE',
            scope: {
                skHomestate: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            controller: controller,
            controllerAs: 'log',
            bindToController: true,
            templateUrl:'scripts/user/directives/sk_signup.directive.html'
        };
    };
    directive.$inject = directiveDeps;

    appUser.directive(directivename, directive);
