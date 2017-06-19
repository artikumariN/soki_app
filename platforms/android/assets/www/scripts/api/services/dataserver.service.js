'use strict';
var servicename = 'dataserver';

    var dependenciesdata = ["main.api.url", "$http", "$q", "main.dbStorage.db", "main.app.messageDisplay"];

    function convertToArray(obj,dataType){
        if(['login','access','profile'].indexOf(dataType) > -1){
          return obj; //donot convertToArray for login,access, and profile data response
        }
        if(angular.isArray(obj)){
            return obj;
        }
        var arr = [];
        angular.forEach(obj,function(v){
            arr.push(v);
        });
        return arr;
    }

    function mergeObjects(data1,data2){
        return angular.merge(data1,data2);
    }

    function servicedata(Url, $http, $q, DB, messageToastSvc) {
        //Database object
        var db = DB.getDb();
        var lastRefresh = {};
        /* Online data fetch function
        --------------------------------------------------- */
        var getData = function(dataType, paramUrl) {

            var url;

            // Check whether parameters exists..
            if (paramUrl === undefined) {
                console.log("Parameters don't exists..");
                url = Url.getUrl(dataType);
                console.log(url);
            } else {
                //Parameters exists..
                console.log("Parameters exists..:) :)");
                url = Url.getUrl(dataType, paramUrl);
                console.log(url);
            }

            var q = $q.defer();
            //First check whether the data is available offline
            db.get(dataType).then(function(res) {
                    //Local data available.
                    //Next check for update time. Not implemented yet
                    console.log(res);
                    console.log(dataType + " already exists..");
                    q.resolve(convertToArray(res.data.data, dataType));
                })
                .catch(function(error) {
                    //No local data. SO go online
                    console.log("Getting data from online...");
                    $http.get(url).then(function(data) {
                        if (data.data.status === 200) {
                            //Save to db
                            data["_id"] = dataType;
                            data["timestamp"] = ( data.data.ts || Math.round(Date.now()/1000));
                            db.put(data).then(function(putRes) {
                                    console.log("Data added to DB");
                                    q.resolve(convertToArray(data.data.data, dataType));
                                })
                                .catch(function(putError) {
                                    console.log(putError);
                                    q.reject(putError);
                                })
                            console.log(data);
                        }
                    });

                });

            return q.promise;
        };

        var getUpdate = function(dataType, paramUrl) {

            var url;

            // Check whether parameters exists..
            if (paramUrl === undefined) {
                console.log("Parameters don't exists..");
                url = Url.getUrl(dataType);
                console.log(url);
            } else {
                //Parameters exists..
                console.log("Parameters exists..:) :)");
                url = Url.getUrl(dataType, paramUrl);
                console.log(url);
            }

            var q = $q.defer();

                    db.get(dataType).then(function(res) {
                    //Local data available.
                    //Next check for update time. Not implemented yet
                    var ts = res.timestamp;
                    if(lastRefresh[dataType] && Date.now()-lastRefresh[dataType]*1000 <= 180000){
                        messageToastSvc.message("List was just updated. Try after a minute.");
                        return;
                    }

                     $http.get(url, {
                            params: { afterTs: ts }
                        }).then(function(data) {
                            console.log("found results ", (data.data.results))
                            lastRefresh[dataType] = data.data.ts || Math.round(Date.now()/1000);
                            if (data.data.status === 200 && data.data.results) {
                                //Save to db
                                data["_id"] = dataType;
                                data["_rev"] = res._rev;
                                data["timestamp"] = data.data.ts || Math.round(Date.now()/1000);
                                var mergedData = mergeObjects(res.data.data,data.data.data);
                                data.data.data = angular.copy(mergedData);
                                db.put(data).then(function(putRes) {
                                        console.log("Data added to DB");
                                        messageToastSvc.message("List updated.");
                                        q.resolve(convertToArray(data.data.data, dataType));

                                    })
                                    .catch(function(putError) {
                                        console.log(putError);
                                        messageToastSvc.message("List wasn't updated. Try again later.");
                                        q.reject(putError);
                                    })
                            }
                        },function error(error) {
                          messageToastSvc.message("List wasn't updated. Try again later.");
                        });
                    });

            return q.promise;
        }

        /* --------------------------------------------------- */
        return {
            getData: getData,
            getUpdate: getUpdate
        };

    }
    servicedata.$inject = dependenciesdata;
    appApi.factory('main.api.dataserver', servicedata);
