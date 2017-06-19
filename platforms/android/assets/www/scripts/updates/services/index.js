'use strict';

module.exports = function(app) {
    // inject:start
    require('./updates.service')(app);
    // inject:end
};