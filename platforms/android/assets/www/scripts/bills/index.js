'use strict';


var modulename = 'bills';


    var fullname = 'main.bills';

    var appbill = angular.module('main.bills', ['ui.router', 'ionic','ngCordova']);

    ///appbill.namespace = appbill.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('menu.bills', {
                url: '/bills',
                views: {
                    "menu-view": {
                        templateUrl: 'scripts/bills/views/bills.html',
                        controller: ['$stateParams','$scope','$ionicTabsDelegate',function ($stateParams,$scope,$ionicTabsDelegate) {
                                    $scope.tab = $stateParams.tab;
                                    setTimeout(function () {
                                      if($scope.tab == 'all'){
                                        debugger
                                        $ionicTabsDelegate.select(2, false);
                                      }
                                    }, 1000);
                              }]
                        }
                    },
                params: {
                    tab: null
                  }
            }).state('menu.makePayment', {
                url: '/bills/makePayment/:id',
                views: {
                    "menu-view": {
                        templateUrl: 'scripts/bills/views/make-payment.html',
                        controller: 'main.bills.makePayment as mp'
                    }
                },
                params: {
                    balance: null,
                    id:null,
                    currency: null
                },
            });
    };
    configRoutes.$inject = configRoutesDeps;
    appbill.config(configRoutes);
