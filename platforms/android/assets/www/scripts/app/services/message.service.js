'use strict';
var servicename = 'messageDisplay';



    var dependenciesMessage = ["$cordovaToast"];

    function serviceMessage($cordovaToast) {
        var message = function(message) {
          try{
            $cordovaToast.showLongBottom(message);
          }
          catch(e){
            console.error("Error: ",e);
            alert(message);
          }
        };

        return {
            message: message
        };
    }
    serviceMessage.$inject = dependenciesMessage;
    app.factory('main.app.messageDisplay', serviceMessage);
