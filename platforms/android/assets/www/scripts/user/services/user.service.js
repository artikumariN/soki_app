'use strict';
var servicename = 'user';

    var depUser = ["main.api.dataserver", "main.user.skvDetails", "main.app.skvSocieties", "$q", "$http", "$httpParamSerializerJQLike", "pouchDB", "$localStorage", "main.dbStorage.db", "main.app.messageDisplay"];

    function serviceUser(DS, userDetails, Societies, $q, $http, $httpParamSerializerJQLike, pouchDB, $localStorage, DB, messageToastSvc) {

        //Database object to use
        var db = DB.getDb();

        /* App login function
          ------------------------------------------------ */
        var login = function(user, pass) {

            //Login to server
            var q = $q.defer();

            //Get profile details
            var getProfileInfo = function(usr) {
                DS.getData('profile').then(function(profile) {
                    userDetails.profile = profile;
                    //Save societies to db
                    console.log("getUserInfor :", profile);

                    $localStorage.profile = profile;
                    console.log("getUserInfor :", $localStorage.profile);
                    //----------
                    q.resolve(usr);
                });
            };
            $http({
                method: 'POST',
                url: "https://demo.societywise.in/api/v1/users/login",
                withCredentials: false,
                data: $httpParamSerializerJQLike({
                    "username": user,
                    "password": pass
                })
            }).then(function(usr) {
                console.log("https success");
                messageToastSvc.message("Login Successful");
                $http.defaults.headers.common["AccessToken"] = usr.data.data.accessToken;

                //Save user to local storage
                $localStorage.accessToken = usr.data.data.accessToken;
                $localStorage.user = usr.data.data;
                userDetails.user = $localStorage.user;

                //----------
                Societies.all = usr.data.data.societies;

                getProfileInfo(usr);
            }, function(err) {
                console.log(err);
                q.reject(err);
            });
            return q.promise;
        };

        var signup = function(user, pass, name, mobile) {

            //Login to server
            var q = $q.defer();

            //Get profile details
            var getProfileInfo = function(usr) {
                DS.getData('profile').then(function(profile) {
                    userDetails.profile = profile;
                    //Save societies to db
                    $localStorage.profile = profile;
                    //----------
                    q.resolve(usr);
                });
            };
            $http({
                method: 'POST',
                url: "http://demo.societywise.in/api/v1/users",
                withCredentials: false,
                data: $httpParamSerializerJQLike({
                    "email": user,
                    "password": pass,
                    "name": name,
                    "mobile": mobile
                })
            }).then(function(usr) {
                $http.defaults.headers.common["AccessToken"] = usr.data.data.accessToken;

                //Save user to local storage
                $localStorage.accessToken = usr.data.data.accessToken;
                $localStorage.user = usr.data.data;
                userDetails.user = $localStorage.user;

                //----------
                Societies.all = usr.data.data.societies;

                getProfileInfo(usr);
            }, function(err) {
                console.log(err);
                q.reject(err);
            });
            return q.promise;
        };

        /* Is User logged In function
          ------------------------------------------------ */
        var isLoggedIn = function() {
            var accessToken;
            if($localStorage.accessToken){
              return true;
            }
            else {
              return false;
            }
        };

        /* ------------------------------------------------ */
        return {
            login: login,
            signup: signup,
            isLoggedIn: isLoggedIn
        };
    }
    serviceUser.$inject = depUser;
    appUser.factory('main.user.user', serviceUser);
