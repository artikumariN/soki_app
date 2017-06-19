'use strict';
var servicename = 'currencyIcon';


    var depCurrency = [];

    function serviceCurrency() {
        var hasIcon = false;
        var currencyList = {
            "INR":"fa-rupee",
            "TLY":"fa-try",
            "TRY":"fa-try",
            "USD":"fa-usd",
            "AUD":"fa-usd",
            "NZD":"fa-usd",
            "EUR":"fa-eur",
            "GBP":"fa-gbp",
            "ILS":"fa-shekel"
        };
        /* Get current selected
        --------------------------------------------------- */
        var getIcon = function(currency) {
            return currencyList[currency];
        };

        return {
            getIcon: getIcon
        };

    }
    serviceCurrency.$inject = depCurrency;
    app.factory('main.app.currencyIcon', serviceCurrency);
