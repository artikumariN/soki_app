'use strict';
var controllername = 'ticketsCtrl';


    var fullname = 'main.tickets.ticketsCtrl';
    /*jshint validthis: true */

    var depsTicketList = ['$http', '$httpParamSerializerJQLike', '$state', '$ionicHistory', 'Upload', '$timeout', 'main.app.skvSocieties','$ionicNavBarDelegate'];

    function controllerTicket($http, $httpParamSerializerJQLike, $state, $ionicHistory, Upload, $timeout, skvSocieties, $ionicNavBarDelegate) {
        //$ionicSideMenuDelegate.canDragContent(false);
        var vm = this;
        //vmm.controllername = 'main.tickets.ticketsCtrl';

    }

    controllerTicket.$inject = depsTicketList;
    appTickets.controller('main.tickets.ticketsCtrl', controllerTicket);
