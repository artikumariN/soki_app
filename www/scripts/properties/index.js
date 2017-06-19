'use strict';
var modulename = 'properties';


    var fullname = namespace + '.' + modulename;

    var appProperties = angular.module('mainProperty', ['ui.router']);
    // inject:folders end
    appProperties.namespace = appProperties.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('menu.properties', {
            url: '/properties/:propId',
            views: {
                "menu-view": {
                    templateUrl: 'scripts/properties/views/property.html',
                    controller: "main.properties.property as prop"
                }
            }
        });
    };
    configRoutes.$inject = configRoutesDeps;
    appProperties.config(configRoutes);
