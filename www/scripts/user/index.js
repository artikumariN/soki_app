var modulename = 'user';
var fullname = namespace + '.' + modulename;
var appUser = angular.module('main.user', ['ui.router','ionic', 'ngCordova', 'ngStorage']);
    // inject:folders end
    appUser.namespace = appUser.namespace || {};

    /* Device ready Function
    -------------------------------------------------------------------- */
    function deviceReady($ionicPlatform, $window, $cordovaNetwork, DB, $q) {

        var q = $q.defer();
        $ionicPlatform.ready(function() {
            console.log("Resolving State-------------------->>");
            //Initiate local database
            DB.initiate();

            //Back button hacnamespacek
            $ionicPlatform.registerBackButtonAction(function(event) {
                navigator.appUser.backHistory();
            }, 100);

            //Hide splash screen
            navigator.splashscreen.hide();

            if ($window.cordova && $window.cordova.plugins.Keyboard) {
                $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                $window.cordova.plugins.Keyboard.disableScroll(false);
            }
            if ($window.StatusBar) {
                $window.StatusBar.styleDefault();
            }
            q.resolve();
        });

        /* -------------------------------------------------------------------- */
        return q.promise;
    };

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('login', {
            url: '/',
            templateUrl: 'scripts/user/views/login.html'
        });
        $stateProvider.state('signup', {
            url: '/signup',
            templateUrl: 'scripts/user/views/signup.html'
        });
    };
    configRoutes.$inject = configRoutesDeps;
    appUser.config(configRoutes);
