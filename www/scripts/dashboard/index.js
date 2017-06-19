'use strict';

var modulename = 'dashboard';


var fullname ='main.dashboard';

var appDashboard = angular.module('mainDashBoard', ['ui.router', 'ionic', 'ngCordova','pouchdb']);

var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
var configRoutes = function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('menu.dashboard', {
        url: '/dashboard',
        views: {
            "menu-view": {
                templateUrl:'scripts/dashboard/views/dashboard.html',
                controller: "main.dashboard.dashboard as dash"
            }
        }
    });
};

configRoutes.$inject = configRoutesDeps;
appDashboard.config(configRoutes);
