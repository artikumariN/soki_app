'use strict';

module.exports = function(app) {
    // inject:start
    require('./sk_app.directive')(app);
    require('./soc_selector.directive')(app);
    require('./sk_amount.directive')(app);
    // inject:end
};
