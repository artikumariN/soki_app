'use strict';

var modulename = 'neighbours';

    var fullname = namespace + '.' + modulename;

    var appNeighour = angular.module('main.neighbours', ['ui.router','ionic', 'ngCordova']);
    // inject:folders start
    // inject:folders end
    appNeighour.namespace = appNeighour.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('menu.neighbours', {
            url: '/neighbours',
            views: {
                "menu-view": {
                    templateUrl: 'scripts/neighbours/views/neighbours.html'
                }
            }
        });
    };
    configRoutes.$inject = configRoutesDeps;
    appNeighour.config(configRoutes);
