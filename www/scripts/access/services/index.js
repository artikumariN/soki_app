'use strict';

module.exports = function(app) {
    // inject:start
    require('./access.service')(app);
    // inject:end
};