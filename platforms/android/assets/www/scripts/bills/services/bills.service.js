'use strict';
var servicename = 'billsService';


    var dependenciesBill = ["main.api.dataserver"];

    function serviceBill(DS) {

      /* Get All Bills Function
      --------------------------------------------------- */
      var getAll = function() {
          return DS.getData("bills");
      };

      var getPayments = function() {
          return DS.getData("payments");
      };

      /* Get Bills by Type ie., by summary, pending etc..
      --------------------------------------------------- */
      var getBalances = function() {
          return DS.getData("balances");
      }

      /* Get Updated Bills Function
      --------------------------------------------------- */
      var getServiceUpdate = function(type) {
          return DS.getUpdate(type);
      }
      /* ------------------------------------------------ */
      return {
          getAll: getAll,
          getBalances: getBalances,
          getServiceUpdate: getServiceUpdate,
          getPayments: getPayments
      };

    }
    serviceBill.$inject = dependenciesBill;
    appbill.factory('main.bills.billsService', serviceBill);
