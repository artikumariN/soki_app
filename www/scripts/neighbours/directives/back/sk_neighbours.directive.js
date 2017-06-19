'use strict';
/*eslint consistent-this:[2,  "skNeighboursCtrl"] */
var directivename = 'skNeighbours';

module.exports = function(app) {

    /* Controller
    --------------------------------------------------- */
    var controllerDeps = ["main.neighbours.neighbours", "main.utils.icon", "main.app.skvSocieties"];
    var controller = function(Nbrs, Icon, skvSocieties) {
        var nbrs = this;
        // nbrs.search = {};

        //Society and Property filter Values
        nbrs.selected = skvSocieties.selected;
        console.log(skvSocieties);

        /* Data Functions
        --------------------------------------------------- */
        Nbrs.getAll().then(function(data) {
            nbrs.data = data;
            console.log(nbrs.data);

            /* Toggle User
            ----------------------------------------------- */
            nbrs.groups = [];
            for (var i = 0; i < data.length; i++) {
                nbrs.groups[i] = {
                    name: data[i].name,
                    mobile:data[i].mobile,
                    details: {}
                };
                delete data[i].name;
                delete data[i].mobile;
                for (var key in data[i]) {
                    nbrs.groups[i].details[key] = data[i][key];
                }
            }
            console.log(nbrs.groups);
            nbrs.toggleGroup = function(group) {
                if (nbrs.isGroupShown(group)) {
                    nbrs.shownGroup = null;
                } else {
                    nbrs.shownGroup = group;
                }
            };
            nbrs.isGroupShown = function(group) {
                return nbrs.shownGroup === group;
            };
        });

        /* Icon Provider
        --------------------------------------------------- */
        nbrs.getPropIcon = function(prop) {
            return Icon.getIcon(prop);
        }

        /* --------------------------------------------------- */
    };
    controller.$inject = controllerDeps;

    /*eslint-disable consistent-this */

    // directive
    var directiveDeps = [];
    var directive = function() {
        return {
            restrict: 'AE',
            scope: {
                skTitle: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            controller: controller,
            controllerAs: 'nbrs',
            bindToController: true,
            template: require('./sk_neighbours.directive.html'),
        };
    };
    directive.$inject = directiveDeps;

    app.directive(directivename, directive);
};
