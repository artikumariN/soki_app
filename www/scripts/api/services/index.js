'use strict';

module.exports = function(app) {
    // inject:start
    require('./dataserver.service')(app);
    require('./url.service')(app);
    // inject:end
};
