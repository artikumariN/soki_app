'use strict';

module.exports = function(app) {
    // inject:start
    require('./access.controller')(app);
    // inject:end
};