'use strict';
var servicename = 'date';


    var dependenciesDate = [];

    function serviceDate() {

        /* Convert date to UTC
        --------------------------------------------------- */
        var getUTC = function(year, month, date) {

            var utcDate = new Date(Date.UTC(year, month, date));
            var utc = {
                date: new Date(year, month, date).getUTCDate(),
                month: (new Date(year, month, date).getUTCMonth()),
                year: new Date(year, month, date).getUTCFullYear(),
                utc: utcDate
            }
            return utc;
        };

        /* Convert date to date object
        --------------------------------------------------- */
        var convert = function(d) {
            // Converts the date in d to a date-object. The input can be:
            //   a date object: returned without modification
            //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
            //   a number     : Interpreted as number of milliseconds
            //                  since 1 Jan 1970 (a timestamp)
            //   a string     : Any format supported by the javascript engine, like
            //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
            //  an object     : Interpreted as an object with year, month and date
            //                  attributes.  **NOTE** month is 0-11.
            return (
                d.constructor === Date ? d :
                d.constructor === Array ? new Date(d[0], d[1], d[2]) :
                d.constructor === Number ? new Date(d) :
                d.constructor === String ? new Date(d) :
                typeof d === "object" ? new Date(d.year, d.month, d.date) :
                NaN
            );
        }

        /* Compare given date with current date
        --------------------------------------------------- */
        var compareWithNow = function(year, month, date) {
            var now = new Date;
            var date1 = new Date(Date.UTC(year, month, date));
            var date2 = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
            var timeDiff = date2.getTime() - date1.getTime();
            console.log(timeDiff);
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);

            return diffDays;
        };

        /* Checks if date in d is between dates in start and end
        --------------------------------------------------- */
        var inRange = function(d, start, end) {
            // Returns a boolean or NaN:
            //    true  : if d is between start and end (inclusive)
            //    false : if d is before start or after end
            //    NaN   : if one or more of the dates is illegal.
            // NOTE: The code inside isFinite does an assignment (=).
            return (
                isFinite(d = this.convert(d).valueOf()) &&
                isFinite(start = this.convert(start).valueOf()) &&
                isFinite(end = this.convert(end).valueOf()) ?
                start <= d && d <= end :
                NaN
            );
        }

        /* --------------------------------------------------- */
        return {
            getUTC: getUTC,
            convert: convert,
            compareWithNow: compareWithNow,
            inRange: inRange
        };

    }
    serviceDate.$inject = dependenciesDate;
    appUtil.factory('main.utils.date', serviceDate);
