'use strict';
var controllername = 'wvCtrl';

    var fullname = 'main.menu.wvCtrl';
    /*jshint validthis: true */

    var depsWebView = ["$http","$sce", "$stateParams"];

    function controllerwebView($http,$sce,$stateParams) {
      var vm = this;
      vm.controllername = fullname;
      console.log($stateParams.url);
      vm.title = $stateParams.title;
      vm.url = $sce.trustAsResourceUrl($stateParams.url);
        $http({
            method: 'GET',
            url: $stateParams.url
        }).then(function(response) {
          console.log(response);
            vm.data = $sce.trustAsHtml(response.data);
        }, function(err) {
            console.log(err);
        });

    }
    controllerwebView.$inject = depsWebView;
    appMenu.controller('main.menu.wvCtrl', controllerwebView);
