'use strict';

var appMain = angular.module('mainApp', ['ionic', 'ngCordova','ionic-native-transitions','pouchdb']);

appMain.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

if (process.env.SENTRY_MODE=== 'prod') {
    var configCompileDeps = ['$compileProvider'];
    var configCompile = function($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    };
    configCompile.$inject = configCompileDeps;
    appMain.config(configCompile);
}

var runDeps = ['$ionicPlatform', '$window', 'main.dbStorage.db', '$cordovaNetwork'];

var run = function($ionicPlatform, $window, DB, $cordovaNetwork) {

  $ionicPlatform.ready(function() {
      console.log("Ionic device ready-------------------->>");
      // $scope.$broadcast('appLoaded');

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      //Hardware back button disable
      // $ionicPlatform.registerBackButtonAction(function() {
      //     event.preventDefault();
      // }, 100);

      //Back button hack
      $ionicPlatform.registerBackButtonAction(function(event) {
          navigator.app.backHistory();
      }, 100);

      //Hide splash screen
      // navigator.splashscreen.hide();

      if ($window.cordova && $window.cordova.plugins.Keyboard) {
          $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          $window.cordova.plugins.Keyboard.disableScroll(false);
      }
      if ($window.StatusBar) {
          $window.StatusBar.styleDefault();
      }
      if ($window.TestFairy) {
          $window.TestFairy.begin(process.env.TESTFAIRY_IOS_APP_TOKEN);
      }

      // window.FirebasePlugin.getToken(function(token) {
      //     // save this server-side and use it to push notifications to this device
      //     console.log(token);
      // }, function(error) {
      //     console.error(error);
      // });

      if($window.FirebasePlugin){
        $window.FirebasePlugin.getValue("dev_name", function(value) {
            console.log("Firebase Value - ",value);
            //alert("Success:", value);
        }, function(error) {
            console.error("Firebase error",error);
            //alert("Firebase Error:", error);
        });
      }

      document.addEventListener("offline", onOffline, false);

      function onOffline() {
          // Handle the offline event
          showOfflineSnackbar();
      }

      function showOfflineSnackbar() {
        try{
          if(!$cordovaNetwork.isOnline()){
              cordova.plugins.snackbar('No internet. Please connect and try again.', 'INDEFINITE', "Dismiss", function(){
                  console.log('Dismiss Button Clicked');
              });
          } // end cordova Network
        }catch(e){
            console.error("Cordova Error:", e);
        }
      }
      showOfflineSnackbar();

  });
};
//appConfig.$inject = appConfigDeps;
run.$inject = runDeps;
appMain.run(run);
app.factory('interceptorsSession', ['$localStorage','$injector','$httpParamSerializerJQLike',function($localStorage, $injector, $httpParamSerializerJQLike) {
    var interceptorsSession =
    {
        request : function (config) {
          config.timeout = 60000;
          return config;
        },
        responseError: function(response) {

              switch (response.status) {
                  case 401:
                  if($localStorage.user && $localStorage.user.refreshToken){
                    var DS = $injector.get('main.api.dataserver');
                      $injector.get("$http")({
                      method: 'POST',
                      url: "https://demo.societywise.in/api/v1/users/"+$localStorage.user.userId+"/refreshToken",
                      withCredentials: false,
                      headers : {},
                      data: $httpParamSerializerJQLike({
                          "refreshToken": $localStorage.user.refreshToken})
                      }).then(function(usr) {
                          console.log(usr);
                          $localStorage.user.accessToken = usr.data.data.accessToken;
                          $localStorage.user.refreshToken = usr.data.data.refreshToken;
                          // var profileDBData = DS.getData("profile");
                          // if(profileDBData.data.data.updatedAt != usr.data.data.profileUpdatedAt){
                          //     DS.getUpdate('profile');
                          // }
                      }, function(response) {
                          console.error(response);
                      });
                    }
                      break;

                  default:
                      break;
              }
            return response
        }
    };
  appMain.factory('interceptorsSession', ['$localStorage','$injector','$httpParamSerializerJQLike',function($localStorage, $injector, $httpParamSerializerJQLike) {
    var interceptorsSession =
    {
        request : function (config) {
          config.timeout = 60000;
          return config;
        },
        responseError: function(response) {

              switch (response.status) {
                  case 401:
                  if($localStorage.user && $localStorage.user.refreshToken){
                    var DS = $injector.get('main.api.dataserver');
                      $injector.get("$http")({
                      method: 'POST',
                      url: "https://demo.societywise.in/api/v1/users/"+$localStorage.user.userId+"/refreshToken",
                      withCredentials: false,
                      headers : {},
                      data: $httpParamSerializerJQLike({
                          "refreshToken": $localStorage.user.refreshToken})
                      }).then(function(usr) {
                          console.log(usr);
                          $localStorage.user.accessToken = usr.data.data.accessToken;
                          $localStorage.user.refreshToken = usr.data.data.refreshToken;
                          // var profileDBData = DS.getData("profile");
                          // if(profileDBData.data.data.updatedAt != usr.data.data.profileUpdatedAt){
                          //     DS.getUpdate('profile');
                          // }
                      }, function(response) {
                          console.error(response);
                      });
                    }
                      break;

                  default:
                      break;
              }
            return response
        }
    };
    return interceptorsSession;
}]);
appMain.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.timeout = 60000;
  $httpProvider.interceptors.push('interceptorsSession');
}]);
    return interceptorsSession;
}]);
appMain.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.timeout = 60000;
  $httpProvider.interceptors.push('interceptorsSession');
}]);
