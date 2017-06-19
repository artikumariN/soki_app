'use strict';

module.exports = function(app) {
    // inject:start
    require('./sk_login.directive')(app);
    require('./sk_signup.directive')(app);
    // inject:end
};