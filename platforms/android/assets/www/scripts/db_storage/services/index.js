'use strict';

module.exports = function(app) {
    // inject:start
    require('./db.service')(app);
    // inject:end
};