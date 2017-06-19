'use strict';
/*eslint consistent-this:[2,  "socSelectorCtrl"] */
var directivename = 'skAmount';


    var controllerDepsAmount = [
        "$ionicPopover",
        "$scope",
        "main.user.skvDetails",
        "main.utils.icon",
        "main.app.society",
        "$localStorage",
        "main.app.currencyIcon"
    ];
    var controllerAmount = function($ionicPopover, $scope, skvDetails, Icon, Society,$localStorage,currencyIconSvc) {
        var vm = this;
        vm.hasIcon = true;
        vm.currencyIcon = function () {
            var icon = currencyIconSvc.getIcon(vm.currency);
            if(!icon){
              vm.hasIcon = false;
            }
            return icon;
        }

        vm.colorCode = function functionName(){
          if(vm.amount < 0){
            return '#d32f2f';
          }else{
            return '#2e7b32';
          }
        }
        /* --------------------------------------------------- */
    };

    controllerAmount.$inject = controllerDepsAmount;

    /*eslint-disable consistent-this */

    // directive


    var directiveDeps = [];
    var directiveAmount = function() {
      return {
          restrict: 'AE',
          scope: {
              amount: '=', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
              showColor: '=', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
              currency: '=', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
              pay: '=', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
          },
          controller: controllerAmount,
          controllerAs: 'amt',
          bindToController: true,
          templateUrl: 'scripts/app/directives/sk_amount.directive.html',
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
    directiveAmount.$inject = directiveDeps;

    app.directive('skAmount', directiveAmount);
