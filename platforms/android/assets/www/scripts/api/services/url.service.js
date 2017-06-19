'use strict';
var servicename = 'url';

    var dependenciesUrl = ["main.api.urlVals"];

    function serviceUrl(urlVals) {
        var getUrl = function(urlType, urlParams) {
            if (urlParams === undefined) {
                return urlVals.baseUrl + urlVals[urlType].url;
            } else {
                return urlVals.baseUrl + urlVals[urlType].url + urlVals[urlType][urlParams].url;
            }
        };

        return {
            getUrl: getUrl
        };

    }
    serviceUrl.$inject = dependenciesUrl;
    appApi.factory('main.api.url', serviceUrl);
