'use strict';

var modulename = 'help';

    var fullname = 'main.help';

    var appHelp = angular.module('mainHelp', ['ui.router','ionic', 'ngCordova']);
    // inject:folders start
    // inject:folders end
    appHelp.namespace = appHelp.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('menu.help', {
            url: '/help',
            views: {
                "menu-view": {
                    templateUrl:'scripts/help/views/help.html'
                }
            }
        });
    };
    configRoutes.$inject = configRoutesDeps;
    appHelp.config(configRoutes);
