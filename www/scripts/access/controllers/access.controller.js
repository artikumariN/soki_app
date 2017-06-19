'use strict';
var controllername = 'access';

    var fullname = appAccess.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;

        var activate = function() {

        };
        activate();
    }

    controller.$inject = deps;
    appAccess.controller(fullname, controller);
