'use strict';
var servicename = 'updates';

    var dependenciesService = ["main.api.dataserver"];

    function serviceUpdates(DS) {

        /* Get All Bills Function
        --------------------------------------------------- */
        var getAll = function() {
            return DS.getData("updates");
        };

        return {
            getAll: getAll
        };

    }
    serviceUpdates.$inject = dependenciesService;
    appUpdate.factory('main.updates.updates', serviceUpdates);
