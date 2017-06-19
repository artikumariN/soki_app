'use strict';

module.exports = function(app) {
    // inject:start
    require('./bills.service')(app);
    // inject:end
};