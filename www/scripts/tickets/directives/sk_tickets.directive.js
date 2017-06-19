'use strict';
/*eslint consistent-this:[2,  "skTicketsCtrl"] */
var directivename = 'skTickets';


    /* Controller
    --------------------------------------------------- */
    var depsTickets = ["main.tickets.tickets", "main.utils.icon", "main.app.society", "$scope", "main.api.dataserver"];
    var controllerTickets = function(Tickets, Icon, Society, $scope, DS) {
      var tickets = this;

      //Society and Property filter Values
      tickets.selected = Society.getSelected();
      console.log(tickets.selected);

      /* Data Functions
      --------------------------------------------------- */
      tickets.getDataAndRender = function(){
          Tickets.getAll().then(function(data) {
              tickets.data = data;
              console.log(tickets.data);
          });
      }
      tickets.getDataAndRender();

      tickets.refreshList = function(){
        DS.getUpdate("tickets").then(function(data) {
            tickets.getDataAndRender();
        });
        $scope.$broadcast('scroll.refreshComplete');
      }

      /* Icon Provider
      --------------------------------------------------- */
      tickets.getPropIcon = function(prop) {
          return Icon.getIcon(prop);
      }
      
    };
    controllerTickets.$inject = depsTickets;

    /*eslint-disable consistent-this */

    /* directive
    --------------------------------------------------- */
    var directiveDepsTickets = [];
    var directiveTickets = function() {
        return {
            restrict: 'AE',
            scope: {
                title: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            controller: controllerTickets,
            controllerAs: 'tickets',
            bindToController: true,
            templateUrl: 'scripts/tickets/directives/sk_tickets.directive.html',
        };
    };
    directiveTickets.$inject = directiveDepsTickets;

    appTickets.directive('skTickets', directiveTickets);
