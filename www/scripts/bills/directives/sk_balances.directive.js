'use strict';
/*eslint consistent-this:[2,  "skBillsCtrl"] */
var directivename = 'skBills';


    // controller
    var depsBalance = ["$state", "$scope", "main.bills.billsService", "main.utils.icon", "main.utils.sort", "main.app.skvSocieties", "$localStorage"];
    var controllerBalance = function ($state, $scope, Bills, Icon, Sort, skvSocieties, storage) {
      var bills = this;

      if (storage.user && storage.user.societies) {
          bills.societiesList = storage.user.societies;
      }

      $scope.$on('refresher', function(e) {
          bills.doRefresh();
      });

      bills.filterAccess = function (data) {
          return true; //since no optAccessType now in summary API
          return data.optAccessType == '435' ||
              data.optAccessType == '441' ||
              data.optAccessType == '439';
      };

      //Society and Property filter Values
      bills.selected = skvSocieties.selected;
      console.log("skvSocieties",skvSocieties);

      bills.getDataAndRender = function(){
          /* Data fetching Function
          --------------------------------------------------- */
          if (bills.filter === "balances") {
              //Get Balance Bills
              Bills.getBalances().then(function (data) {
                  bills.data = data;
                  console.log(bills.data);
              });
          }
          else if (bills.filter === "payments") {
              //Get Balance Bills
              Bills.getPayments().then(function (data) {
              console.log(data,"payments data");
                  bills.data = data;
                  var group = Sort.byMonth(data, "transDate");
                  bills.thisMonth = group["This Month"];
                  bills.earlier = group["Earlier"];
                  console.log("Payments",bills.data);
              });
          }
          else {
              Bills.getAll().then(function (data) {
              console.log(data,"all data");
                  bills.data = data;
                  var group = Sort.byMonth(data, "txDate");
                  bills.thisMonth = group["This Month"];
                  bills.earlier = group["Earlier"];
                  console.log(bills.data);
                  console.log(group);
              });
          }
      }
      bills.getDataAndRender();

      bills.refreshList = function() {
          var type;
          switch (bills.filter) {
              case 'payments':
                  type = 'payments';
                  break;
              case 'balances':
                  type = 'balances';
                  break;

              default:
                  type = 'bills';
                  break;
          }
         Bills.getServiceUpdate(type).then(function(){
             bills.getDataAndRender();
         });
         $scope.$broadcast('scroll.refreshComplete');
      }


      /* Property Icon provider
      --------------------------------------------------- */
      bills.getPropIcon = function (prop) {
          return Icon.getIcon(prop);
      }
    };
    controllerBalance.$inject = depsBalance;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = [];
    var directiveBalance = function () {
        return {
            restrict: 'AE',
            scope: {
                filter: '@', // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
                showTitle: '@',
                hidePaid: '@'
            },
            controller: controllerBalance,
            controllerAs: 'bills',
            bindToController: true,
            templateUrl: 'scripts/bills/directives/sk_balances.directive.html'
        };
    };
    directiveBalance.$inject = directiveDeps;

    appbill.directive('skBills', directiveBalance);
