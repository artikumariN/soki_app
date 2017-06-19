'use strict';

module.exports = function(app) {
    // inject:start
    require('./sk_access.directive')(app);
    // inject:end
};