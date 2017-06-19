'use strict';

module.exports = function(app) {
    // inject:start
    require('./property.controller')(app);
    // inject:end
};