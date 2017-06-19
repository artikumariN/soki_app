'use strict';
var controllername = 'property';

    var fullnameProperty = 'main.properties.property';
    /*jshint validthis: true */

    var depsProperty = ["$state", "$stateParams", "main.app.society", "main.utils.icon"];

    function controllerProperty($state, $stateParams, Soc, Icon) {
      var vm = this;
      vm.controllername = fullname;
      vm.propId = $stateParams.propId;
      vm.selected = Soc.getPropertyById(vm.propId);
      vm.society = vm.selected.society;
      vm.property = vm.selected.property;

      /* Property Icon provider
      --------------------------------------------------- */
      vm.getPropIcon = function(prop) {
          return Icon.getIcon(prop);
      }
    }

    controllerProperty.$inject = depsProperty;
    appProperties.controller('main.properties.property', controllerProperty);
