'use strict';

    var controllername = 'dashboard';

    var fullname = 'main.dashboard.dashboard';
    var depsDash = ['$cordovaSQLite', '$httpParamSerializerJQLike', 'pouchDB', '$ionicPlatform'];

    function controllerDash($cordovaSQLite, $httpParamSerializerJQLike, pouchDB, $ionicPlatform) {
        var vm = this;
        vm.controllername = fullname;
        $ionicPlatform.ready(function() {
            console.log("Ionic device ready ---------From DASHBOARD-------------------->>");
        });

    }

    controllerDash.$inject = depsDash;
    //console.log(fullname);
    appDashboard.controller('dashboard', controllerDash);
