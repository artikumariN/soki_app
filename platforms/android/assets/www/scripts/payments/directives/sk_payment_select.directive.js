'use strict';
/*eslint consistent-this:[2,  "skPaymentSelectCtrl"] */
var directivename = 'skPaymentSelect';

    // controller
    var controllerDepsPayment = ['$scope', '$state', '$cordovaInAppBrowser', '$ionicHistory', '$timeout'];
    var controllerPayment = function($scope, $state, $cordovaInAppBrowser, $ionicHistory, $timeout) {
      var ps = this;
      ps.directivename = directivename;
      // ps.paymentMode = 'cash';
      ps.backView = $ionicHistory.backView().stateName;
      ps.countInterval = 5000;
      ps.showPayButton = false;
      ps.attach = [];

      console.log(ps.backView);

      /* Payment Counter Confirm
      --------------------------------------------------- */
      ps.confirmPayment = function() {
          ps.showPayButton = true;
          $timeout(function() {
              ps.showPayButton = false;
          }, ps.countInterval)
      };

      ps.attachmentChanged = function(a){
          angular.forEach(a,function(val){
              ps.attach.push(val);
          });
      };
      /* Make Payment
      --------------------------------------------------- */
      ps.makePayment = function() {
          console.log("ps.otherAmt111",ps.paymentMode);
          if(ps.paymentMode === '191'){
              var body = $httpParamSerializerJQLike({
                  transMode: ps.paymentMode,
                  amount: ps.skBalance,
                  transNo: ps.chequeNo,
                  transDate: ps.chequeDate,
                  transBank: ps.transBankName,
                  comments: ps.comments,
                  accessId: ps.skAccessId,
                  attach: ps.attach
              });

              console.log("body191 :",body);
              $http.post(urlVals.baseUrl+urlVals.payments.url, body).then(function(res) {
                      console.log("res", res);
                      if (res.status === 200) {

                      }
                  },
                  function(err) {
                      console.log(err);
                  });
          } // end 191 if cheque

          if(ps.paymentMode === '192'){
            var body = $httpParamSerializerJQLike({
                amount: ps.skBalance,
                comments: ps.comments,
                accessId: ps.skAccessId,
                attach: ps.attach
            });

            console.log("body192 :",body);
            $http.post(urlVals.baseUrl+urlVals.payments.url, body).then(function(res) {
                console.log("res 192", res);
            },function(err) {
                console.log(err);
            });
          } // end paymentMode 192 - cash

          if(ps.paymentMode === '193'){
            var body = $httpParamSerializerJQLike({
                amount: ps.skBalance,
                comments: ps.comments,
                details:ps.details193,
                accessId: ps.skAccessId,
                attach: ps.attach
            });

            console.log("body 193:",body);
            $http.post(urlVals.baseUrl+urlVals.payments.url, body).then(function(res) {
                console.log("res 193", res);
            },function(err) {
                console.log(err);
            });
          } // end paymentMode 193 - cash

          if(ps.paymentMode === 'online'){
              // In app Browser
              var options = {
                  location: 'no',
                  clearcache: 'no',
                  toolbar: 'no'
              };

              document.addEventListener("deviceready", function() {
                  //console.log("deviceready");
                  var win = $cordovaInAppBrowser.open("http://demo.societywise.in/api/v1/payments/start?accessId=" + ps.skAccessId, '_blank', options)
                      .then(function(event) {
                          console.log("loaded Cordova successfully");
                      })
                      .catch(function(event) {
                          // error
                          alert("error loading page");
                      });
              }, false);

              $scope.$on('$cordovaInAppBrowser:loadstart', function(e, event) {
                  if (event.url === "http://demo.societywise.in/api/v1/payments/complete?gateway=citrus") {
                      $cordovaInAppBrowser.close();
                      alert("Payment Completed");
                      $state.go(ps.backView);
                  }
              });
          } // if payment online
      };


        /* ------------------------------------------------- */
    };
    controllerPayment.$inject = controllerDepsPayment;

    /*eslint-disable consistent-this */

    // directive
    var directiveDepsPayment = [];
    var directivePayment = function() {
        return {
            restrict: 'AE',
            scope: {
                skAccessId: '@',
                skBalance: '@'
            },
            controller: controllerPayment,
            controllerAs: 'ps',
            bindToController: true,
            templateUrl:'scripts/payments/directives/sk_payment_select.directive.html',
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
    directivePayment.$inject = directiveDepsPayment;

    appPayment.directive('skPaymentSelect', directivePayment);
