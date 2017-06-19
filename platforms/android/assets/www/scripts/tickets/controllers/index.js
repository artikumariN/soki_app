'use strict';

module.exports = function(app) {
    // inject:start
    require('./add_ticket.controller')(app);
    require('./ticket_details.controller')(app);
    // inject:end
};