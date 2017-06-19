'use strict';

var modulename = 'menu';



    var fullname = namespace + '.' + modulename;

    var appMenu = angular.module('mainMenu', ['ui.router', 'ionic', 'ngCordova','ngStorage']);
    // inject:folders end
    appMenu.namespace = appMenu.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('menu', {
            url: '/menu',
            templateUrl:'scripts/menu/views/menu.html',
            controller:"main.menu.menuCtrl as menu",
            abstract:true
        });

        $stateProvider.state('menu.webview', {
            url: '/webview?url&title',
            views: {
                "menu-view": {
                    templateUrl: 'scripts/menu/views/webview.html',
                    controller:"main.menu.wvCtrl as wv"
                }
            }
        });
    };
    configRoutes.$inject = configRoutesDeps;
    appMenu.config(configRoutes);
