'use strict';

module.exports = function(app) {
    // inject:start
    require('./sk_neighbours.directive')(app);
    // inject:end
};
