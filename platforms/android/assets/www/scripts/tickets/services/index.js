'use strict';

module.exports = function(app) {
    // inject:start
    require('./tickets.service')(app);
    // inject:end
};