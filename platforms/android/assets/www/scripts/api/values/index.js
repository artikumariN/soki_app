'use strict';

module.exports = function(app) {
    // inject:start
    require('./urls.value')(app);
    // inject:end
};