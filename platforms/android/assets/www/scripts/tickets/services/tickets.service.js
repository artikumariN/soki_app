'use strict';
var servicename = 'tickets';

    var dependenciesService = ["main.api.dataserver"];

    function serviceTickets(DS) {
        /* Get All Bills Function
        --------------------------------------------------- */
        var getAll = function() {
            return DS.getData("tickets");
        };

        var getUpdated = function() {
            return DS.getData("tickets");
        };

        var getOptions = function() {
            return DS.getData("options");
        };

        return {
            getAll: getAll,
            getUpdated: getUpdated,
            getOptions: getOptions
        };

    }
    serviceTickets.$inject = dependenciesService;
    appTickets.factory('main.tickets.tickets', serviceTickets);
