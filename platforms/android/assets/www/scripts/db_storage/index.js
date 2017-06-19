'use strict';
var modulename = 'dbStorage';

var fullname = 'main.dbStorage';

var appdb = angular.module('mainDbStrorage', ['ui.router','ionic', 'ngCordova']);

var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
var configRoutes = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('no-internet', {
        url: '/no-internet',
        templateUrl: 'scripts/db_storage/views/home.html'
    });
};
configRoutes.$inject = configRoutesDeps;
appdb.config(configRoutes);

//Run Block
var runDeps = ['main.dbStorage.db', '$ionicPlatform'];
var run = function(DB, $ionicPlatform) {
  console.log("PREPARING DB>>");
  //Initiate local database
  DB.initiate();
};
run.$inject = runDeps;
appdb.run(run);
