'use strict';

module.exports = function(app) {
    // inject:start
    require('./neighbours.service')(app);
    // inject:end
};