'use strict';
var controllername = 'ticketDetails';

    var fullname = 'main.tickets.ticketDetails';
    /*jshint validthis: true */

    var depsTdetails = ['$stateParams', '$state'];

    function controllerTdetails($stateParams, $state) {
        var vm = this;
        vm.ticketId = $stateParams.id;
    }

    controllerTdetails.$inject = depsTdetails;
    appTickets.controller('main.tickets.ticketDetails', controllerTdetails);
