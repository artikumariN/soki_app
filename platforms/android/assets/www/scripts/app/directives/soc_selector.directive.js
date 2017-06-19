'use strict';

/*eslint consistent-this:[2,  "socSelectorCtrl"] */
var directivename = 'socSelector';
    var controllerDepsSoc = [
        "$ionicPopover",
        "$scope",
        "main.user.skvDetails",
        "main.utils.icon",
        "main.app.society",
        "$localStorage"
    ];
    var controllerSoc = function($ionicPopover, $scope, skvDetails, Icon, Society,$localStorage) {
        var soc = this;

        soc.societies = $localStorage.user.societies;
        soc.selected = {};
        soc.title = Society.getTitle();

        /* Change title when view changes
        -------------------------------------------------------------- */
        $scope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                soc.title = Society.getTitle();
                console.log("Changing title.."+soc.title);
            });

        /* Show Societies popup function
        -------------------------------------------------------------- */
     $ionicPopover.fromTemplateUrl('scripts/app/directives/soc_selector_popover.html', {
            scope: $scope
        }).then(function(popover) {
          $scope.popover = popover;
  });;

        soc.showSoc = function($event) {
            $scope.popover.show($event);
        };

        /* Icon Provider
        --------------------------------------------------- */
        soc.getPropIcon = function(prop) {
            if (!prop) {
                return;
            } else {
                return Icon.getIcon(prop);
            }
        };

        /* SelectSoc Function - Selects Society
        --------------------------------------------------- */
        soc.selectSoc = function(society) {
            soc.selected = Society.selectSoc(society);
            soc.title = Society.getTitle();
            console.log("title"+soc.title)

            $scope.popover.hide();
        };

        /* SelectProp Function - Selects Society or Property
        --------------------------------------------------- */
        soc.selectProp = function(society, property) {
            soc.selected = Society.selectProp(society, property);
            soc.title = Society.getTitle();

            $scope.popover.hide();
        };

        /* Clear selected Societies and Property
        --------------------------------------------------- */
        soc.clearskvSocieties = function() {
            Society.clearskvSocieties();
            soc.title = Society.getTitle();
            $scope.popover.hide();
        };



        console.log("---------------------------------------------------------------------------------",soc.societies);
        /* --------------------------------------------------- */
    };

    controllerSoc.$inject = controllerDepsSoc;

    /*eslint-disable consistent-this */

    // directive
    var directiveDepsSoc = [];
    var directiveSoc = function() {
        return {
            restrict: 'AE',
            scope: {
                skTitle: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            controller: controllerSoc,
            controllerAs: 'soc',
            bindToController: true,
            templateUrl: 'scripts/app/directives/soc_selector.directive.html',
            compile: function(tElement, tAttrs) {
                return {
                    pre: function(scope, element, attrs) {

                    },
                    post: function(scope, element, attrs) {

                    }
                };
            }
        };
    };
    directiveSoc.$inject = directiveDepsSoc;

    app.directive('socSelector', directiveSoc);
