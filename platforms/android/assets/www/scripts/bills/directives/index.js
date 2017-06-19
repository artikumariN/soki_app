'use strict';

module.exports = function(app) {
    // inject:start
    require('./sk_balances.directive')(app);
    // inject:end
};
