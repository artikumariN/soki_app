'use strict';

module.exports = function(app) {
    // inject:start
    require('./society.service')(app);
    // inject:end
};