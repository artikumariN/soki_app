'use strict';

module.exports = function(app) {
    // inject:start
    require('./menu_ctrl.controller')(app);
    require('./menu_webview.controller')(app);
    // inject:end
};
