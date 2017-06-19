'use strict';
/*eslint consistent-this:[2,  "skUpdatesCtrl"] */
var directivename = 'skUpdates';


    /* Controller
    --------------------------------------------------- */
    var depsUpdate = ["main.updates.updates", "main.utils.icon", "main.app.society", "main.utils.sort"];
    var controllerupdates = function(Updates, Icon, Society, Sort) {
      var updates = this;

      //Society and Property filter Values
      updates.selected = Society.getSelected();
      console.log(updates.selected);

      //Timezone correction
      var d = new Date()
      updates.tzOffset = d.getTimezoneOffset();

      /* Data Functions
      --------------------------------------------------- */
      Updates.getAll().then(function(data) {
          updates.data = data;
          var group = Sort.byMonth(data, "updatedAt");
          updates.thisMonth = group["This Month"];
          updates.earlier = group["Earlier"];

          console.log(updates.data);
          console.log(group);
      });

      /* Icon Provider
      --------------------------------------------------- */
      updates.getPropIcon = function(prop) {
          return Icon.getIcon(prop);
      }
    };
    controllerupdates.$inject = depsUpdate;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = [];
    var directiveUpdates = function() {
        return {
            restrict: 'AE',
            scope: {
                title: '@', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
                showTitle:'@'
            },
            controller: controllerupdates,
            controllerAs: 'updates',
            bindToController: true,
            templateUrl: 'scripts/updates/directives/sk_updates.directive.html'
        };
    };
    directiveUpdates.$inject = depsUpdate;

    appUpdate.directive('skUpdates', directiveUpdates);
