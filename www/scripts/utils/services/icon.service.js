'use strict';
var servicename = 'icon';

    var dependenciesIcon = [];

    function serviceIcon() {
        var getIcon = function(prop) {
          switch (prop) {
              case "residential":
                  return "fa-home";
                  break;

              case "commercial":
                  return "fa-briefcase";
                  break;

              case "Bill":
                  return "fa-file-text-o";
                  break;

              case "Cheque":
                  return "fa-edit";
                  break;

              case "EFT":
                  return "fa-edit";
                  break;

              case "Cash":
                  return "fa-money";
                  break;
              case "Payment via Cash":
                  return "fa-money";
                  break;

              case "Banktransfer":
                  return "fa-edit";
                  break;
              case "Payment via Bank":
                  return "fa-edit";
                  break;

              case "Online":
                  return "fa-laptop";
                  break;

              case "Issue":
                  return "fa-flag";
                  break;

              case "Info":
                  return "fa-info-circle";
                  break;

              case "Event":
                  return "fa-calendar-o";
                  break;

              default:
                  return "fa-building-o";
          }
        };

        return {
            getIcon: getIcon
        };

    }
    serviceIcon.$inject = dependenciesIcon;
    appUtil.factory('main.utils.icon', serviceIcon);
