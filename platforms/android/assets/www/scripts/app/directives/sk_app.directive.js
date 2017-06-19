'use strict';
/*eslint consistent-this:[2,  "skAppCtrl"] */
var directiveskApp = 'skAppDirective';
    // controller
    var controllerDepsApp = ["$rootScope", "$scope","$http", "$state", "main.user.user", '$cordovaNetwork', '$window', '$ionicPlatform', '$localStorage'];
    var controllerApp = function($rootScope, $scope, $http, $state, User, $cordovaNetwork, $window, $ionicPlatform, $localStorage) {
      var skAppCtrl = this;
      skAppCtrl.directivename = directivename;

      /* Check Login status and re-direct
      --------------------------------------------------- */
      $scope.$on('$stateChangeStart',
          function(event, toState, toParams, fromState, fromParams) {
              console.log("State Change...");
              //Check if User is logged in..
              if (User.isLoggedIn() === true) {
                  //Add access token header from local data
                  $http.defaults.headers.common["AccessToken"] = $localStorage.accessToken;

                  if (toState.name === "login") {
                      $state.go("menu.dashboard");
                  }
              }

              if (toState.name !== "login" && toState.name !== "signup") {
                  console.log("Not the HOMEPAGE........");
                  console.log('Login status', User.isLoggedIn());
                  if (User.isLoggedIn() === false) {
                      console.log("User not Logged in...");
                      event.preventDefault();
                      $state.go("login");
                  }
              } else {
                  //User logged in.. So prevent going back to login form
                  if (User.isLoggedIn() === true) {
                      event.preventDefault();
                      console.log("User logged in. So no login form");
                  }
              }
          });

      /* --------------------------------------------------- */
  };
    controllerApp.$inject = controllerDepsApp;

    /*eslint-disable consistent-this */

    // directive

    var directiveDeps = [];
    var directiveApp = function() {
      return {
          restrict: 'AE',
          scope: {
              title: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
          },
          controller: controllerApp,
          controllerAs: 'skAppCtrl',
          bindToController: true,
          templateUrl: 'scripts/app/directives/sk_app.directive.html',
      };
    };

    directiveApp.$inject = directiveDeps;
    app.directive('skApp', directiveApp);
