'use strict';
/*eslint consistent-this:[2,  "skNeighboursCtrl"] */
var directivename = 'skNeighbours';


    /* Controller
    --------------------------------------------------- */
    var controllerDepsNeigh = ["$scope", "main.neighbours.neighbours", "main.utils.icon", "main.app.skvSocieties", "$ionicModal", "$ionicHistory", "$cordovaContacts"];
    var controllerNbrs = function($scope, Nbrs, Icon, skvSocieties, $ionicModal, $ionicHistory, $cordovaContacts) {
      var nbrs = this;
      // nbrs.search = {};

      //Society and Property filter Values
      nbrs.selected = skvSocieties.selected;
      console.log(skvSocieties);

      /* Data Functions
      --------------------------------------------------- */
      nbrs.getDataAndRender = function(){
          Nbrs.getAll().then(function(data) {
              nbrs.data = data;
              console.log(nbrs.data);

              /* Group user data --------------------- */
              nbrs.groups = [];
              for (var i = 0; i < data.length; i++) {
                  nbrs.groups[i] = {
                      name: data[i].name,
                      mobile: data[i].mobile,
                      details: {}
                  };
                  delete data[i].name;
                  delete data[i].mobile;
                  for (var key in data[i]) {
                      nbrs.groups[i].details[key] = data[i][key];
                  }
              }
              console.log(nbrs.groups);
          });
      }
      nbrs.getDataAndRender();

      nbrs.refreshList = function(){
        DS.getUpdate("neighbours").then(function(data) {
            nbrs.getDataAndRender();
        });
        $scope.$broadcast('scroll.refreshComplete');
      }

      /* User Modal
      ----------------------------------------------- */
      nbrs.isModalOpen = false;

      $ionicModal.fromTemplateUrl('my-modal.html', {
          scope: $scope,
          animation: 'slide-in-up'
      }).then(function(modal) {
          nbrs.modal = modal;
      });

      /* Open Modal --------------------- */
      nbrs.openModal = function(group) {
          nbrs.user = group;
          nbrs.userDetails = group.details;
          nbrs.modal.show();
          nbrs.isModalOpen = true;
      };

      /* Close Modal --------------------- */
      nbrs.closeModal = function() {
          nbrs.modal.hide();
          nbrs.isModalOpen = false;
      };

      /* Back button Close Modal --------------------- */
      $scope.$on("$stateChangeStart", function(event, data) {
          if (nbrs.isModalOpen) {
              event.preventDefault();
              nbrs.closeModal();
              console.log(nbrs.isModalOpen);
          }
      });

      $scope.$on('modal.shown', function(e) {
          console.log(e);
          console.log($ionicHistory.viewHistory());
      });

      /* Add to contacts function
      --------------------------------------------------- */
      nbrs.addContact = function(user, details) {
          $cordovaContacts.save({
            'displayName':user.name,
            'phoneNumbers':[
              {
                'value':user.mobile,
                'type':'mobile'
              }
            ]
          }).then(function(result) {
              // Contact saved
              nbrs.result = result;
              alert("Contact Created " + user.name);
          }, function(err) {
              // Contact error
              alert(err);
          });
      };

      /* Icon Provider
      --------------------------------------------------- */
      nbrs.getPropIcon = function(prop) {
          return Icon.getIcon(prop);
      }

        /* --------------------------------------------------- */
    };
    controllerNbrs.$inject = controllerDepsNeigh;

    /*eslint-disable consistent-this */

    // directive
    var directiveDepsNbrs = [];
    var directiveNbrs = function() {
        return {
            restrict: 'AE',
            scope: {
                skTitle: '@' // '@' reads attribute value, '=' provides 2-way binding, '&" works with functions
            },
            controller: controllerNbrs,
            controllerAs: 'nbrs',
            bindToController: true,
            templateUrl: 'scripts/neighbours/directives/sk_neighbours.directive.html',
        };
    };
    directiveNbrs.$inject = directiveDepsNbrs;

    appNeighour.directive('skNeighbours', directiveNbrs);
