'use strict';

module.exports = function(app) {
    // inject:start
    require('./date.service')(app);
    require('./icon.service')(app);
    require('./sort.service')(app);
    // inject:end
};