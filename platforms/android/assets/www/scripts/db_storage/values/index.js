'use strict';

module.exports = function(app) {
    // inject:start
    require('./db_config.value')(app);
    // inject:end
};