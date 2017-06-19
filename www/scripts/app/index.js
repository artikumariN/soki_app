'use strict';
var modulename = 'app';

    var fullname = namespace + '.' + modulename;
    var app = angular.module('app', ['ui.router', 'ionic', 'ngCordova', 'angular-loading-bar', 'ngStorage']);
    // inject:folders start

    // inject:folders end
    app.namespace = app.namespace || {};

    //Config Block
    var configCompileDeps = ['cfpLoadingBarProvider'];
    var configCompile = function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = true;
        //cfpLoadingBarProvider.spinnerTemplate = 'scripts/app/views/spinner.html';
        cfpLoadingBarProvider.spinnerTemplate = '<div class="loading-spinner"><img src="images/app/spinner.gif" alt="Please wait.." /><h2>Please wait..</h2></div>';
    };

    configCompile.$inject = configCompileDeps;
    app.config(configCompile);

    //Routes
    var configRoutesDeps = ['$localStorageProvider'];
    var configRoutes = function($localStorageProvider) {
        //Setup Local storage
        $localStorageProvider.setKeyPrefix('sk-');
    };
    configRoutes.$inject = configRoutesDeps;
    app.config(configRoutes);

    //Run Block
    var runDeps = ['main.dbStorage.db', '$ionicPlatform', '$rootScope'];
    var run = function(DB, $ionicPlatform, $rootScope) {
      console.log("app")
    };
    run.$inject = runDeps;
    app.run(run);
