'use strict';
var servicename = 'sort';

    var depUtilsSort = ["$q", "main.utils.date"];

    /* Group and build array based on month field
    --------------------------------------------------- */
    function serviceUtilsSort($q, Dates) {
        var byMonth = function(obj, field) {
            // var q = $q.defer();
            var group = this.groupBy(obj, field);
            var result = {};
            console.log(group);

            for (var prop in group) {
                var preDate = Dates.convert(prop);
                var now = new Date;
                var preUfDate = new Date(preDate);
                var ufDate = preUfDate.getTime();

                //Check for current month
                if (preDate.getMonth() === now.getMonth() && preDate.getFullYear() === now.getFullYear()) {

                    if (result["This Month"] === undefined) {
                        result["This Month"] = [];
                    }
                    for (var j in group[prop]) {
                        //Add the unformatted date property for filtering
                        group[prop][j].ufDate = ufDate;
                        result["This Month"].push(group[prop][j]);
                    }
                } else {
                    if (result["Earlier"] === undefined) {
                        result["Earlier"] = [];
                    }
                    for (var j in group[prop]) {
                        //Add the unformatted date property for filtering
                        group[prop][j].ufDate = ufDate;
                        result["Earlier"].push(group[prop][j]);
                    }
                }
            }
            console.log(group[prop]);
            // q.resolve(result);
            // return q.promise;
            return result;
        };

        /* Group by property field
        --------------------------------------------------- */
        var groupBy = function(collection, property) {
            var i = 0,
                prop, index,
                values = [],
                result = [];
            var resultObj = {};
            angular.forEach(collection,function(val,key){
                prop = val[property];
                index = values.indexOf(prop);
                if (index > -1) {
                    // result[index].push(collection[i]);
                    if (resultObj[prop] === undefined) {
                        resultObj[prop] = [];
                    }
                    resultObj[prop].push(val);
                } else {
                    values.push(prop);
                    // result.push([collection[i]]);
                    if (resultObj[prop] === undefined) {
                        resultObj[prop] = [];
                    }
                    resultObj[prop].push(val);
                }
            })
            
            return resultObj;
        }

        /* --------------------------------------------------- */
        return {
            byMonth: byMonth,
            groupBy: groupBy
        };

    }
    serviceUtilsSort.$inject = depUtilsSort;
    appUtil.factory('main.utils.sort', serviceUtilsSort);
