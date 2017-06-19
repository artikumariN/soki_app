'use strict';

var modulename = 'api';

var fullname = namespace + '.' + modulename;

var appApi = angular.module('main.api', []);


//Config Block
var configRoutesDeps = ['$urlRouterProvider', '$httpProvider'];
var configRoutes = function($urlRouterProvider, $httpProvider) {

$httpProvider.defaults.useXDomain = true;
$httpProvider.defaults.withCredentials = false;
// $httpProvider.defaults.transformRequest = function(obj) {
// var str = [];
// for (var p in obj)
//     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
// return str.join("&");
// };
$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
delete $httpProvider.defaults.headers.common['X-Requested-With']
$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
//$httpProvider.defaults.headers.common["Authorization"] = "Basic ZjRjZWNiN2JiNTY4NGQxYTpiODRhYzI3Y2NhMDI2NDhi";
$httpProvider.defaults.headers.common["Authorization"] = "Basic "+btoa("zrq2v*xhuDF1kpjz7:I1KFSnd*TW3xL&iYB");

};
configRoutes.$inject = configRoutesDeps;
appApi.config(configRoutes);
