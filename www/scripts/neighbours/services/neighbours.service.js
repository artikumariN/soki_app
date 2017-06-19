'use strict';
var servicename = 'neighbours';

    var depService = ["main.api.dataserver"];

    function serviceNeighbour(DS) {

        /* Get All Bills Function
          --------------------------------------------------- */
        var getAll = function() {
            return DS.getData("neighbours");
        };

        return {
            getAll: getAll
        };

    }
    serviceNeighbour.$inject = depService;
    appNeighour.factory('main.neighbours.neighbours', serviceNeighbour);
