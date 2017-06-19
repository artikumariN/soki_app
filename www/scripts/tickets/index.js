'use strict';


  var modulename = 'tickets';


    var fullname = namespace + '.' + modulename;

    var appTickets = angular.module('main.tickets', ['ui.router' ,'ionic', 'ngCordova','ngFileUpload']);
    // inject:folders start
    // inject:folders end
    appTickets.namespace = appTickets.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('menu.tickets', {
          url: '/tickets',
          cache: false,
          views:{
            "menu-view":{
              templateUrl:'scripts/tickets/views/tickets.html',
              controller:"main.tickets.ticketsCtrl as tkts"
            }
          }
      })
      .state('menu.addTicket', {
          url: '/addTicket',
          views:{
            "menu-view":{
              templateUrl:'scripts/tickets/views/add-ticket.html',
              controller:"main.tickets.addTicket as tkt"
            }
          }
      }).state('menu.ticketsDetails', {
          url: '/tickets/:id',
          views:{
            "menu-view":{
              templateUrl: 'scripts/tickets/views/ticket-details.html',
              controller:"main.tickets.ticketDetails as tkd"
            }
          }
      });
    };
    configRoutes.$inject = configRoutesDeps;
    appTickets.config(configRoutes);
