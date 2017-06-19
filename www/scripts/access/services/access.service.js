'use strict';
var servicename = 'accessService';

    var dependenciesSrv = ["main.api.dataserver"];

    function serviceAccess(DS) {

        /* Get All Access Function
          --------------------------------------------------- */
        var getAll = function() {
            return DS.getData("access");
        };

        return {
            getAll: getAll
        };

    }
    serviceAccess.$inject = dependenciesSrv;
    appAccess.factory('main.access.accessService', serviceAccess);
