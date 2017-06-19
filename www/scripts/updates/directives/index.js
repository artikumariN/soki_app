'use strict';

module.exports = function(app) {
    // inject:start
    require('./sk_updates.directive')(app);
    // inject:end
};