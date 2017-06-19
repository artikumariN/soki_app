'use strict';
var controllername = 'makePayment';

    var fullname = 'main.bills.makePayment';
    /*jshint validthis: true */

    var depss = ['$http', '$httpParamSerializerJQLike', '$cordovaInAppBrowser', '$window', '$scope', '$state', '$stateParams','main.app.currencyIcon', 'main.bills.billsService'];

    function controllerBill($http, $httpParamSerializerJQLike, $cordovaInAppBrowser, $window, $scope, $state, $stateParams,currencyIconSvc, Bills) {
      var vm = this;
      vm.controllername = fullname;
      vm.resHtml = "";
      vm.toggle = {
        amount:{},
        pay:{}
      };
      vm.paymentMode = 'online';
      vm.balanceAmt = parseInt($stateParams.balance);
      vm.otherAmt = vm.balanceAmt;
      vm.accessId = $stateParams.id;
      vm.currency = $stateParams.currency;
      console.log($stateParams);

      Bills.getAll().then(function (data) {
          vm.inprogress = data;
          console.log(data);
          var totalPaymentInProcess = 0;
          angular.forEach(vm.inprogress,function (val,key) {
            if(val.propId == vm.accessId){
              totalPaymentInProcess += val.amount;
            }
          })
          if(totalPaymentInProcess > 0){
            var totalPaidPayment = parseInt(vm.balanceAmt) - totalPaymentInProcess;
            if(totalPaidPayment < 0){
              totalPaidPayment = 0;
            }
            var msg = 'Payment of ' + vm.currency + ' '+ totalPaymentInProcess + ' is awaiting confirmation. Unpaid balance is ' + vm.currency + ' ' + totalPaidPayment;
            try{
              cordova.plugins.snackbar(msg, 'INDEFINITE', "Dismiss", function(){
                  //console.log();
              });
            }catch(e){
                alert(msg);
            }
          }
      });

      vm.getIcon = function (c) {
        return currencyIconSvc.getIcon(c);
      }
      /* Highlight Selected boxes
      --------------------------------------------------- */
      vm.toggle.amount.current = vm.toggle.pay.transfer = 'active';
      vm.toggleActive = function(key, type) {
        if(key == 'current'){
          vm.otherAmt = vm.balanceAmt;
          debugger
        }
          vm.toggle[type] = {};
          vm.toggle[type][key] = "active";
      };


      //Make Payment Function
      vm.makePayment = function() {

      };
    }

    controllerBill.$inject = depss;
    appbill.controller('main.bills.makePayment', controllerBill)
