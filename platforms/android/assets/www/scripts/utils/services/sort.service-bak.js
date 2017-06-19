'use strict';
var servicename = 'sort';

module.exports = function(app) {

    var dependencies = ["$q","main.utils.date"];

    /* Group and build array based on month field
    --------------------------------------------------- */
    function service($q,Dates) {
        var byMonth = function(obj, field) {
            var q = $q.defer();
            var group = this.groupBy(obj, field);
            var result = {};
            console.log(group);

            for(var prop in group){
              var preDate = Dates.convert(prop);
              var now = new Date;
              console.log(group[prop]);

              //Check for current month
              if(preDate.getMonth() === now.getMonth() && preDate.getFullYear() === now.getFullYear()){
                if(result["This Month"] === undefined){
                  result["This Month"] = [];
                }
                for (var j in group[prop]){
                  result["This Month"].push(group[prop][j]);
                }
              }
              else{
                if(result["Earlier"] === undefined){
                  result["Earlier"] = [];
                }
                for (var j in group[prop]){
                  result["Earlier"].push(group[prop][j]);
                }
              }
            }
            q.resolve(result);
            return q.promise;
        };

        /* Group by property field
        --------------------------------------------------- */
        var groupBy = function(collection, property) {
            var i = 0,
                val, index,
                values = [],
                result = [];
            var resultObj = {};
            for (; i < collection.length; i++) {
                val = collection[i][property];
                index = values.indexOf(val);
                if (index > -1) {
                    // result[index].push(collection[i]);
                    if(resultObj[val] === undefined){
                      resultObj[val] = [];
                    }
                    resultObj[val].push(collection[i]);
                } else {
                    values.push(val);
                    // result.push([collection[i]]);
                    if(resultObj[val] === undefined){
                      resultObj[val] = [];
                    }
                    resultObj[val].push(collection[i]);
                }
            }
            return resultObj;
        }

        /* --------------------------------------------------- */
        return {
            byMonth: byMonth,
            groupBy: groupBy
        };

    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};
