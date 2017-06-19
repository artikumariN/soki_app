'use strict';
var controllername = 'menuCtrl';

    var fullname = 'main.menu.menuCtrl';
    /*jshint validthis: true */

    var depsmenu = ["main.user.skvDetails", "main.utils.icon","$localStorage"];

    function controllerMenu(skvDetails, Icon, $localStorage) {
      var vm = this;
      vm.controllername = fullname;
      vm.userDetails = $localStorage.user;
      vm.userProfile = $localStorage.profile.profile;
      vm.societies = $localStorage.user.societies;
      // vm.properties = skvDetails.user["access-data"].access;
      console.log("vm-userDetails",vm.userDetails);
      console.log("vm-userProfile",vm.userProfile);
      console.log("$localStorage.profile.profile",$localStorage.profile.profile);

      /* Icon Provider
      --------------------------------------------------- */
      vm.getPropIcon = function(prop) {
          //console.log("prop icon", prop);
          return Icon.getIcon(prop);
      }
    }

    controllerMenu.$inject = depsmenu;
    appMenu.controller('main.menu.menuCtrl', controllerMenu);
