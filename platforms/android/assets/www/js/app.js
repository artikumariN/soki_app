// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var main = angular.module('main', [

                                    'mainApp',
                                    'mainDbStrorage',
                                    'main.api',
                                    'main.user',
                                    'mainMenu',
                                    'main.neighbours',
                                    'main.access',
                                    'app',
                                    'main.tickets',
                                    'main.bills',
                                    'mainDashBoard',
                                    'mainHelp',
                                    'mainPayment',
                                    'mainProperty',
                                    'settings',
                                    'updates',
                                    'utils'
                                  ]);

main.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      }
  });
})

//main.directive(directiveskApp, directiveApp);
