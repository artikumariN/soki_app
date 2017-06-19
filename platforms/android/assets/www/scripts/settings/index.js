'use strict';

var modulename = 'settings';

    var fullname = namespace + '.' + modulename;

    var appSetting = angular.module('settings', ['ui.router','ionic', 'ngCordova']);
    // inject:folders start
    // inject:folders end
    appSetting.namespace = appSetting.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('menu.settings', {
          url: '/settings',
          views: {
              "menu-view": {
                  templateUrl:'scripts/settings/views/settings.html',
                  controller: ["$localStorage","$state","main.dbStorage.db","$http", function($localStorage ,$state, DB, $http) {
                      var vm=this;
                      vm.logout = function() {
                         $localStorage.$reset();
                         DB.destroy();
                        $state.go("login");
                      }
                      vm.test401 = function() {
                         $http.get('https://demo.societywise.in/api/v1/test?http-code=401');
                      }
                    }],
                    controllerAs: "settings"
              }
          }
      });
    };
    configRoutes.$inject = configRoutesDeps;
    appSetting.config(configRoutes);
