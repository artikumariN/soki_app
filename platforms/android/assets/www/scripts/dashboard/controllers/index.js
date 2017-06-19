'use strict';

module.exports = function(app) {
    // inject:start
    require('./dashboard.controller')(app);
    // inject:end
};