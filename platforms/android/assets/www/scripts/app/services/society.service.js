'use strict';
var servicename = 'society';


    var dependenciesSoc = ["main.app.skvSocieties"];

    function serviceSoc(SocVal) {
      var defaultTitle = "All Societies & Properties"

      /* Get current selected
      --------------------------------------------------- */
      var getSelected = function() {
          return SocVal.selected;
      };

      /* SelectSoc Function - Selects Society
      --------------------------------------------------- */
      var selectSoc = function(society) {
          SocVal.selected.society = society;
          SocVal.selected.property = {};
          SocVal.selected.title = "Society: " + society.name;
          return SocVal.selected;
      };

      /* SelectProp Function - Selects Society or Property
      --------------------------------------------------- */
      var selectProp = function(society, property) {
          SocVal.selected.property = property;
          SocVal.selected.society = society;
          SocVal.selected.title = property.property.type + " #" + property.property.name + ", " + society.name;
          return SocVal.selected;
      };

      /* Clear selected Societies and Property
      --------------------------------------------------- */
      var clearskvSocieties = function() {
          SocVal.selected.property = {};
          SocVal.selected.society = {};
          SocVal.selected.title = defaultTitle;
      };

      /* Title generation to display on Dropdown
      --------------------------------------------------- */
      var getTitle = function() {
          if (SocVal.selected.title === "") {
              return defaultTitle;
          } else {
              return SocVal.selected.title;
          }
      };

      /* Get Property Name from ID
      --------------------------------------------------- */
      var getPropertyById = function(id) {
          var societies = SocVal.all;
          var result = {};
          societies.forEach(function(society) {
              society.accessPoints.forEach(function(prop) {
                  if (prop['propId'] === id) {
                      console.log("PROP", prop);
                      result.property = prop;
                      result.society = society;
                  }
                  console.log(prop['propId']);
              });
          });
          return result;
      };

      var optionsResp = {"status":200,"message":"155 Options","results":155,"data":[{"id":"21","opt_group":"user_status","name":"Created"},{"id":"22","opt_group":"user_status","name":"Invited"},{"id":"23","opt_group":"user_status","name":"Signed-up"},{"id":"24","opt_group":"user_status","name":"Email Verified"},{"id":"25","opt_group":"user_status","name":"Manually Verified"},{"id":"26","opt_group":"user_status","name":"Active"},{"id":"27","opt_group":"user_status","name":"Auto-locked"},{"id":"28","opt_group":"user_status","name":"Blocked (Spam)"},{"id":"29","opt_group":"user_status","name":"Blocked (Abuse)"},{"id":"30","opt_group":"user_status","name":"Deleted"},{"id":"31","opt_group":"name_salutation","name":"Mr"},{"id":"32","opt_group":"name_salutation","name":"Mrs"},{"id":"33","opt_group":"name_salutation","name":"Miss"},{"id":"34","opt_group":"name_salutation","name":"Dr"},{"id":"41","opt_group":"marital_status","name":"Single"},{"id":"42","opt_group":"marital_status","name":"Married"},{"id":"43","opt_group":"marital_status","name":"Divorced"},{"id":"51","opt_group":"society_status","name":"Signup"},{"id":"52","opt_group":"society_status","name":"Email Verified"},{"id":"53","opt_group":"society_status","name":"Manually Verified"},{"id":"54","opt_group":"society_status","name":"Account Setup"},{"id":"55","opt_group":"society_status","name":"UNKNOWN1"},{"id":"56","opt_group":"society_status","name":"Fixtures Setup"},{"id":"57","opt_group":"society_status","name":"Society Data Loaded"},{"id":"58","opt_group":"society_status","name":"Accounts Loaded"},{"id":"59","opt_group":"society_status","name":"Ready for use"},{"id":"60","opt_group":"society_status","name":"Active"},{"id":"61","opt_group":"society_status","name":"Temporarily Deactivated"},{"id":"62","opt_group":"society_status","name":"Auto-locked"},{"id":"63","opt_group":"society_status","name":"License Expired"},{"id":"64","opt_group":"society_status","name":"Blocked (Spam)"},{"id":"65","opt_group":"society_status","name":"Blocked (Misuse)"},{"id":"66","opt_group":"society_status","name":"Deleted"},{"id":"101","opt_group":"account_type","name":"Asset"},{"id":"102","opt_group":"account_type","name":"Liability"},{"id":"103","opt_group":"account_type","name":"Equity"},{"id":"104","opt_group":"account_type","name":"Income"},{"id":"106","opt_group":"account_type","name":"Expense"},{"id":"109","opt_group":"account_type","name":"Balancing"},{"id":"141","opt_group":"gl_posting_nature","name":"Opening"},{"id":"142","opt_group":"gl_posting_nature","name":"NORMAL"},{"id":"143","opt_group":"gl_posting_nature","name":"Journal"},{"id":"144","opt_group":"gl_posting_nature","name":"Reversal"},{"id":"145","opt_group":"gl_posting_nature","name":"Accountant"},{"id":"151","opt_group":"bill_charge_type","name":"Maintenance"},{"id":"153","opt_group":"bill_charge_type","name":"Taxes"},{"id":"154","opt_group":"bill_charge_type","name":"Non-occupancy"},{"id":"155","opt_group":"bill_charge_type","name":"Rental income"},{"id":"156","opt_group":"bill_charge_type","name":"Repair / Sinking Fund"},{"id":"157","opt_group":"bill_charge_type","name":"Other Expenses"},{"id":"158","opt_group":"bill_charge_type","name":"Interest agst. Dues"},{"id":"171","opt_group":"bill_charge_apportion","name":"Per Property"},{"id":"172","opt_group":"bill_charge_apportion","name":"Per Square Feet (psf)"},{"id":"173","opt_group":"bill_charge_apportion","name":"Divided equally among members"},{"id":"174","opt_group":"bill_charge_apportion","name":"Divided based on area"},{"id":"191","opt_group":"bank_trans_mode","name":"Cheque"},{"id":"192","opt_group":"bank_trans_mode","name":"Cash"},{"id":"193","opt_group":"bank_trans_mode","name":"Wire/Bank Transfer"},{"id":"194","opt_group":"bank_trans_mode","name":"Demand Draft (DD)"},{"id":"195","opt_group":"bank_trans_mode","name":"Online Payment"},{"id":"211","opt_group":"occupancy_type","name":"Owned"},{"id":"212","opt_group":"occupancy_type","name":"Rented"},{"id":"221","opt_group":"occupant_type","name":"Owner"},{"id":"222","opt_group":"occupant_type","name":"Nominee"},{"id":"223","opt_group":"occupant_type","name":"Leasor"},{"id":"224","opt_group":"occupant_type","name":"Occupant"},{"id":"251","opt_group":"property_type","name":"Flat"},{"id":"252","opt_group":"property_type","name":"Duplex"},{"id":"253","opt_group":"property_type","name":"Row House"},{"id":"254","opt_group":"property_type","name":"Bungalow"},{"id":"259","opt_group":"property_type","name":"Residential"},{"id":"261","opt_group":"property_type","name":"Shop"},{"id":"262","opt_group":"property_type","name":"Bank"},{"id":"269","opt_group":"property_type","name":"Commercial"},{"id":"301","opt_group":"signup_role","name":"Member"},{"id":"302","opt_group":"signup_role","name":"Secretary/President"},{"id":"303","opt_group":"signup_role","name":"Treasurer"},{"id":"304","opt_group":"signup_role","name":"Committee Member"},{"id":"305","opt_group":"signup_role","name":"Other"},{"id":"306","opt_group":"signup_role","name":"Society Manager"},{"id":"307","opt_group":"signup_role","name":"Builder"},{"id":"308","opt_group":"signup_role","name":"Tenant"},{"id":"309","opt_group":"signup_role","name":"Resident"},{"id":"311","opt_group":"parking_space_type","name":"Common Parking"},{"id":"312","opt_group":"parking_space_type","name":"Stilt (Allocated)"},{"id":"313","opt_group":"parking_space_type","name":"Open (Allocated)"},{"id":"322","opt_group":"notification_delivery_type","name":"Receive printed bills &amp; notices"},{"id":"324","opt_group":"notification_delivery_type","name":"Property-related email alerts"},{"id":"326","opt_group":"notification_delivery_type","name":"Society-related email alerts"},{"id":"328","opt_group":"notification_delivery_type","name":"Society &amp; Property related Push Notifications"},{"id":"331","opt_group":"privacy_type","name":"Keep everything private"},{"id":"332","opt_group":"privacy_type","name":"Share Email"},{"id":"333","opt_group":"privacy_type","name":"Share Mobile No"},{"id":"334","opt_group":"privacy_type","name":"Share Emergency No"},{"id":"335","opt_group":"privacy_type","name":"Share Birthday"},{"id":"336","opt_group":"privacy_type","name":"Share Age"},{"id":"337","opt_group":"privacy_type","name":"Share Family Details"},{"id":"338","opt_group":"privacy_type","name":"Share Location"},{"id":"339","opt_group":"privacy_type","name":"Share Social Data"},{"id":"340","opt_group":"privacy_type","name":"Share Everything"},{"id":"361","opt_group":"vendor_status","name":"New"},{"id":"362","opt_group":"vendor_status","name":"Under Review"},{"id":"363","opt_group":"vendor_status","name":"Approved"},{"id":"364","opt_group":"vendor_status","name":"Blacklisted"},{"id":"365","opt_group":"vendor_status","name":"Archived"},{"id":"371","opt_group":"ticket_status","name":"Open"},{"id":"372","opt_group":"ticket_status","name":"Assigned"},{"id":"373","opt_group":"ticket_status","name":"In Progress"},{"id":"374","opt_group":"ticket_status","name":"Resolved"},{"id":"375","opt_group":"ticket_status","name":"Closed"},{"id":"376","opt_group":"ticket_status","name":"On Hold"},{"id":"377","opt_group":"ticket_status","name":"Reopened"},{"id":"378","opt_group":"ticket_status","name":"Spam"},{"id":"379","opt_group":"ticket_status","name":"Ignored"},{"id":"380","opt_group":"ticket_status","name":"Archived"},{"id":"381","opt_group":"ticket_type","name":"Issue"},{"id":"382","opt_group":"ticket_type","name":"Request"},{"id":"383","opt_group":"ticket_type","name":"Suggestion"},{"id":"384","opt_group":"ticket_type","name":"Compliment"},{"id":"394","opt_group":"ticket_type","name":"Other"},{"id":"395","opt_group":"ticket_priority","name":"Urgent"},{"id":"396","opt_group":"ticket_priority","name":"High"},{"id":"397","opt_group":"ticket_priority","name":"Medium"},{"id":"398","opt_group":"ticket_priority","name":"Low"},{"id":"399","opt_group":"ticket_priority","name":"Quick Fix"},{"id":"401","opt_group":"update_type","name":"Notice"},{"id":"402","opt_group":"update_type","name":"Event"},{"id":"403","opt_group":"update_type","name":"Alert"},{"id":"404","opt_group":"update_type","name":"Confirm"},{"id":"405","opt_group":"update_type","name":"Info"},{"id":"406","opt_group":"update_type","name":"Personal"},{"id":"407","opt_group":"update_type","name":"Ticket"},{"id":"410","opt_group":"update_type","name":"Other"},{"id":"411","opt_group":"event_type","name":"Meeting"},{"id":"412","opt_group":"event_type","name":"Gathering / Celebration"},{"id":"413","opt_group":"event_type","name":"Outing"},{"id":"414","opt_group":"event_type","name":"Family Event"},{"id":"415","opt_group":"event_type","name":"Kids Event"},{"id":"416","opt_group":"event_type","name":"Food Festival"},{"id":"417","opt_group":"event_type","name":"Learning & Training"},{"id":"418","opt_group":"event_type","name":"Community Service"},{"id":"419","opt_group":"event_type","name":"Private Event"},{"id":"432","opt_group":"access_type","name":"Society Admin"},{"id":"433","opt_group":"access_type","name":"Treasurer"},{"id":"434","opt_group":"access_type","name":"Office Bearer"},{"id":"435","opt_group":"access_type","name":"Member"},{"id":"436","opt_group":"access_type","name":"Accountant"},{"id":"437","opt_group":"access_type","name":"Auditor"},{"id":"438","opt_group":"access_type","name":"Society Manager"},{"id":"439","opt_group":"access_type","name":"Property Manager"},{"id":"440","opt_group":"access_type","name":"Leasors"},{"id":"441","opt_group":"access_type","name":"Tenants"},{"id":"442","opt_group":"access_type","name":"Residents"},{"id":"443","opt_group":"access_type","name":"No Access"},{"id":"444","opt_group":"access_type","name":"Nominee"}]};

      var getOptionById = function(id){
          for(var i=0;i<optionsResp.data.length;i++){
              if(optionsResp.data[i].id == id){
                  return optionsResp[i];
                  break;
              }
          }
      }
      /* --------------------------------------------------- */

      return {
          selectSoc: selectSoc,
          selectProp: selectProp,
          clearskvSocieties: clearskvSocieties,
          getTitle: getTitle,
          getSelected: getSelected,
          getPropertyById: getPropertyById,
          getOptionById : getOptionById
      };
    }
    serviceSoc.$inject = dependenciesSoc;
    app.factory('main.app.society',serviceSoc);
