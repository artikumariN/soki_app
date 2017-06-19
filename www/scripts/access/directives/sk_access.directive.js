'use strict';
/*eslint consistent-this:[2,  "skAccessCtrl"] */
var directivename = 'skAccess';

    // controller
    var controllerDepsAccess = ["main.access.accessService", "main.app.skvSocieties", "main.utils.icon"];
    var controllerAccess = function(Access, skvSocieties, Icon) {
        var acc = this;

        //Society and Property filter Values
        acc.selected = skvSocieties.selected;

        /* Data fetching Function
        --------------------------------------------------- */
        Access.getAll().then(function(data) {
            acc.societies = data.societies;
        });

        /* Property Icon provider
        --------------------------------------------------- */
        acc.getPropIcon = function(prop) {
            return Icon.getIcon(prop);
        };

        /* --------------------------------------------------- */
    };
    controllerAccess.$inject = controllerDepsAccess;

    /*eslint-disable consistent-this */

    // directive
    var directiveDepsAccess = [];
    var directiveAccess = function() {
        return {
            restrict: 'AE',
            scope: {
                title: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            controller: controllerAccess,
            controllerAs: 'access',
            bindToController: true,
            templateUrl: 'scripts/access/directives/sk_access.directive.html'
        };
    };
    directiveAccess.$inject = directiveDepsAccess;

    appAccess.directive('skAccess', directiveAccess);
