'use strict';

module.exports = function(app) {
    // inject:start
    require('./sk_tickets.directive')(app);
    // inject:end
};