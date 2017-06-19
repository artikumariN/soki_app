'use strict';


var modulename = 'updates';



    var fullname = 'main.updates';

    var appUpdate = angular.module('updates', ['ui.router','ionic', 'ngCordova']);
    // inject:folders start

    appUpdate.namespace = appUpdate.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('menu.updates', {
          url: '/updates',
          views:{
            "menu-view":{
              templateUrl:'scripts/updates/views/updates.html'
            }
          }
      });
    };
    configRoutes.$inject = configRoutesDeps;
    appUpdate.config(configRoutes);
