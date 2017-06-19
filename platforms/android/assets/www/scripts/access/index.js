'use strict';

// var modulename = 'access';
//
//
//     var fullname = namespace + '.' + modulename;

    var appAccess = angular.module('main.access', ['ui.router', 'ionic', 'ngCordova']);
    // inject:folders start
    // inject:folders end
    appAccess.namespace = appAccess.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('menu.access', {
            url: '/access',
            views: {
                "menu-view": {
                    templateUrl:'scripts/access/views/access.html',
                    controller: "main.access.access as access"
                }
            }
        });
    };
    configRoutes.$inject = configRoutesDeps;
    appAccess.config(configRoutes);
