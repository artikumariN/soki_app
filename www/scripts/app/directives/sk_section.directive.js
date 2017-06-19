'use strict';
/*eslint consistent-this:[2,  "socSelectorCtrl"] */
var directivename = 'skSection';

    var controllerDepsSection = [
        "$ionicPopover",
        "$scope",
        "main.user.skvDetails",
        "main.utils.icon",
        "main.app.society",
        "$localStorage",
        "main.app.currencyIcon"
    ];
    var controllerSection = function($ionicPopover, $scope, skvDetails, Icon, Society,$localStorage, currencyIconSvc) {
        var vm = this;
    };

    controllerSection.$inject = controllerDepsSection;

    /*eslint-disable consistent-this */

    // directive
    var directiveDepsSection = [];
    var directiveSection = function() {
        return {
            restrict: 'AE',
            scope: {
                amount: '=', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
                showColor: '=', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
                currency: '=', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
                pay: '=', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            controller: controllerSection,
            controllerAs: 'sec',
            bindToController: true,
            templateUrl: 'scripts/app/directives/sk_section.directive.html',
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
    directiveSection.$inject = directiveDepsSection;

    app.directive('skSection', directiveSection);
