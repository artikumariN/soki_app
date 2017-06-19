'use strict';

module.exports = function(app) {
    // inject:start
    require('./make_payment.controller')(app);
    // inject:end
};