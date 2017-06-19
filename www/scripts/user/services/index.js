'use strict';

module.exports = function(app) {
    // inject:start
    require('./user.service')(app);
    require('./authentiation.service')(app);
    // inject:end
};
