'use strict';
var controllername = 'addTicket';
    var fullname ='main.tickets.addTicket';
    /*jshint validthis: true */

    var depsAddTicket = ['$http', '$httpParamSerializerJQLike', '$state', '$ionicHistory', 'Upload', '$timeout', 'main.app.skvSocieties','$ionicNavBarDelegate',"main.tickets.tickets"];

    function controllerAddTicket($http, $httpParamSerializerJQLike, $state, $ionicHistory, Upload, $timeout, skvSocieties, $ionicNavBarDelegate, Tickets) {
        //$ionicSideMenuDelegate.canDragContent(false);
        $ionicNavBarDelegate.showBackButton(false);

        var vm = this;
        vm.controllername = fullname;
        vm.type = '381';
        vm.checkbox = true;
        vm.attach = [];
        // $http.get('http://demo.societywise.in/api/v1/options').then(function(res){
        //     vm.options = res.data.data;
        // });
        var options = '{"21":{"id":"21","opt_group":"user_status","name":"No access"},"22":{"id":"22","opt_group":"user_status","name":"Invited"},"23":{"id":"23","opt_group":"user_status","name":"New User"},"24":{"id":"24","opt_group":"user_status","name":"Verified"},"25":{"id":"25","opt_group":"user_status","name":"Verified*"},"26":{"id":"26","opt_group":"user_status","name":"Active"},"27":{"id":"27","opt_group":"user_status","name":"Auto-locked"},"28":{"id":"28","opt_group":"user_status","name":"Blocked (Spam)"},"29":{"id":"29","opt_group":"user_status","name":"Blocked (Abuse)"},"30":{"id":"30","opt_group":"user_status","name":"Deleted"},"31":{"id":"31","opt_group":"name_salutation","name":"Mr"},"32":{"id":"32","opt_group":"name_salutation","name":"Mrs"},"33":{"id":"33","opt_group":"name_salutation","name":"Miss"},"34":{"id":"34","opt_group":"name_salutation","name":"Dr"},"41":{"id":"41","opt_group":"marital_status","name":"Single"},"42":{"id":"42","opt_group":"marital_status","name":"Married"},"43":{"id":"43","opt_group":"marital_status","name":"Divorced"},"51":{"id":"51","opt_group":"society_status","name":"Signup"},"52":{"id":"52","opt_group":"society_status","name":"Email Verified"},"53":{"id":"53","opt_group":"society_status","name":"Manually Verified"},"54":{"id":"54","opt_group":"society_status","name":"Account Setup"},"55":{"id":"55","opt_group":"society_status","name":"UNKNOWN1"},"56":{"id":"56","opt_group":"society_status","name":"Fixtures Setup"},"57":{"id":"57","opt_group":"society_status","name":"Society Data Loaded"},"58":{"id":"58","opt_group":"society_status","name":"Accounts Loaded"},"59":{"id":"59","opt_group":"society_status","name":"Ready for use"},"60":{"id":"60","opt_group":"society_status","name":"Active"},"61":{"id":"61","opt_group":"society_status","name":"Temporarily Deactivated"},"62":{"id":"62","opt_group":"society_status","name":"Auto-locked"},"63":{"id":"63","opt_group":"society_status","name":"License Expired"},"64":{"id":"64","opt_group":"society_status","name":"Blocked (Spam)"},"65":{"id":"65","opt_group":"society_status","name":"Blocked (Misuse)"},"66":{"id":"66","opt_group":"society_status","name":"Deleted"},"101":{"id":"101","opt_group":"account_type","name":"Asset"},"102":{"id":"102","opt_group":"account_type","name":"Liability"},"103":{"id":"103","opt_group":"account_type","name":"Equity"},"104":{"id":"104","opt_group":"account_type","name":"Income"},"106":{"id":"106","opt_group":"account_type","name":"Expense"},"109":{"id":"109","opt_group":"account_type","name":"Balancing"},"141":{"id":"141","opt_group":"gl_posting_nature","name":"Opening"},"142":{"id":"142","opt_group":"gl_posting_nature","name":"NORMAL"},"143":{"id":"143","opt_group":"gl_posting_nature","name":"Journal"},"144":{"id":"144","opt_group":"gl_posting_nature","name":"Reversal"},"145":{"id":"145","opt_group":"gl_posting_nature","name":"Accountant"},"151":{"id":"151","opt_group":"bill_charge_type","name":"Maintenance"},"153":{"id":"153","opt_group":"bill_charge_type","name":"Taxes"},"154":{"id":"154","opt_group":"bill_charge_type","name":"Non-occupancy"},"155":{"id":"155","opt_group":"bill_charge_type","name":"Rental income"},"156":{"id":"156","opt_group":"bill_charge_type","name":"Repair / Sinking Fund"},"157":{"id":"157","opt_group":"bill_charge_type","name":"Other Expenses"},"158":{"id":"158","opt_group":"bill_charge_type","name":"Interest agst. Dues"},"171":{"id":"171","opt_group":"bill_charge_apportion","name":"Per Property"},"172":{"id":"172","opt_group":"bill_charge_apportion","name":"Per Square Feet (psf)"},"173":{"id":"173","opt_group":"bill_charge_apportion","name":"Divided equally among members"},"174":{"id":"174","opt_group":"bill_charge_apportion","name":"Divided based on area"},"191":{"id":"191","opt_group":"bank_trans_mode","name":"Cheque"},"192":{"id":"192","opt_group":"bank_trans_mode","name":"Cash"},"193":{"id":"193","opt_group":"bank_trans_mode","name":"Wire/Bank Transfer"},"194":{"id":"194","opt_group":"bank_trans_mode","name":"Demand Draft (DD)"},"195":{"id":"195","opt_group":"bank_trans_mode","name":"Online Payment"},"211":{"id":"211","opt_group":"occupancy_type","name":"Owned"},"212":{"id":"212","opt_group":"occupancy_type","name":"Rented"},"221":{"id":"221","opt_group":"occupant_type","name":"Owner"},"222":{"id":"222","opt_group":"occupant_type","name":"Nominee"},"223":{"id":"223","opt_group":"occupant_type","name":"Leasor"},"224":{"id":"224","opt_group":"occupant_type","name":"Occupant"},"251":{"id":"251","opt_group":"property_type","name":"Flat"},"252":{"id":"252","opt_group":"property_type","name":"Duplex"},"253":{"id":"253","opt_group":"property_type","name":"Row House"},"254":{"id":"254","opt_group":"property_type","name":"Bungalow"},"259":{"id":"259","opt_group":"property_type","name":"Residential"},"261":{"id":"261","opt_group":"property_type","name":"Shop"},"262":{"id":"262","opt_group":"property_type","name":"Bank"},"269":{"id":"269","opt_group":"property_type","name":"Commercial"},"301":{"id":"301","opt_group":"signup_role","name":"Member"},"302":{"id":"302","opt_group":"signup_role","name":"Secretary/President"},"303":{"id":"303","opt_group":"signup_role","name":"Treasurer"},"304":{"id":"304","opt_group":"signup_role","name":"Committee Member"},"305":{"id":"305","opt_group":"signup_role","name":"Other"},"306":{"id":"306","opt_group":"signup_role","name":"Society Manager"},"307":{"id":"307","opt_group":"signup_role","name":"Builder"},"308":{"id":"308","opt_group":"signup_role","name":"Tenant"},"309":{"id":"309","opt_group":"signup_role","name":"Resident"},"311":{"id":"311","opt_group":"parking_space_type","name":"Common Parking"},"312":{"id":"312","opt_group":"parking_space_type","name":"Stilt (Allocated)"},"313":{"id":"313","opt_group":"parking_space_type","name":"Open (Allocated)"},"322":{"id":"322","opt_group":"notification_delivery_type","name":"Receive printed bills & notices"},"324":{"id":"324","opt_group":"notification_delivery_type","name":"Property-related email alerts"},"326":{"id":"326","opt_group":"notification_delivery_type","name":"Society-related email alerts"},"328":{"id":"328","opt_group":"notification_delivery_type","name":"Society & Property related Push Notifications"},"331":{"id":"331","opt_group":"privacy_type","name":"Keep everything private"},"332":{"id":"332","opt_group":"privacy_type","name":"Share Email"},"333":{"id":"333","opt_group":"privacy_type","name":"Share Mobile No"},"334":{"id":"334","opt_group":"privacy_type","name":"Share Emergency No"},"335":{"id":"335","opt_group":"privacy_type","name":"Share Birthday"},"336":{"id":"336","opt_group":"privacy_type","name":"Share Age"},"337":{"id":"337","opt_group":"privacy_type","name":"Share Family Details"},"338":{"id":"338","opt_group":"privacy_type","name":"Share Location"},"339":{"id":"339","opt_group":"privacy_type","name":"Share Social Data"},"340":{"id":"340","opt_group":"privacy_type","name":"Share Everything"},"361":{"id":"361","opt_group":"vendor_status","name":"New"},"362":{"id":"362","opt_group":"vendor_status","name":"Under Review"},"363":{"id":"363","opt_group":"vendor_status","name":"Approved"},"364":{"id":"364","opt_group":"vendor_status","name":"Blacklisted"},"365":{"id":"365","opt_group":"vendor_status","name":"Archived"},"371":{"id":"371","opt_group":"ticket_status","name":"Open"},"372":{"id":"372","opt_group":"ticket_status","name":"Assigned"},"373":{"id":"373","opt_group":"ticket_status","name":"In Progress"},"374":{"id":"374","opt_group":"ticket_status","name":"Resolved"},"375":{"id":"375","opt_group":"ticket_status","name":"Closed"},"376":{"id":"376","opt_group":"ticket_status","name":"On Hold"},"377":{"id":"377","opt_group":"ticket_status","name":"Reopened"},"378":{"id":"378","opt_group":"ticket_status","name":"Spam"},"379":{"id":"379","opt_group":"ticket_status","name":"Ignored"},"380":{"id":"380","opt_group":"ticket_status","name":"Archived"},"381":{"id":"381","opt_group":"ticket_type","name":"Issue"},"382":{"id":"382","opt_group":"ticket_type","name":"Request"},"383":{"id":"383","opt_group":"ticket_type","name":"Suggestion"},"384":{"id":"384","opt_group":"ticket_type","name":"Compliment"},"394":{"id":"394","opt_group":"ticket_type","name":"Other"},"395":{"id":"395","opt_group":"ticket_priority","name":"Urgent"},"396":{"id":"396","opt_group":"ticket_priority","name":"High"},"397":{"id":"397","opt_group":"ticket_priority","name":"Medium"},"398":{"id":"398","opt_group":"ticket_priority","name":"Low"},"399":{"id":"399","opt_group":"ticket_priority","name":"Quick Fix"},"401":{"id":"401","opt_group":"update_type","name":"Notice"},"402":{"id":"402","opt_group":"update_type","name":"Event"},"403":{"id":"403","opt_group":"update_type","name":"Alert"},"404":{"id":"404","opt_group":"update_type","name":"Confirm"},"405":{"id":"405","opt_group":"update_type","name":"Info"},"406":{"id":"406","opt_group":"update_type","name":"Personal"},"407":{"id":"407","opt_group":"update_type","name":"Ticket"},"410":{"id":"410","opt_group":"update_type","name":"Other"},"411":{"id":"411","opt_group":"event_type","name":"Meeting"},"412":{"id":"412","opt_group":"event_type","name":"Gathering / Celebration"},"413":{"id":"413","opt_group":"event_type","name":"Outing"},"414":{"id":"414","opt_group":"event_type","name":"Family Event"},"415":{"id":"415","opt_group":"event_type","name":"Kids Event"},"416":{"id":"416","opt_group":"event_type","name":"Food Festival"},"417":{"id":"417","opt_group":"event_type","name":"Learning & Training"},"418":{"id":"418","opt_group":"event_type","name":"Community Service"},"419":{"id":"419","opt_group":"event_type","name":"Private Event"},"432":{"id":"432","opt_group":"access_type","name":"Society Admin"},"433":{"id":"433","opt_group":"access_type","name":"Treasurer"},"434":{"id":"434","opt_group":"access_type","name":"Office Bearer"},"435":{"id":"435","opt_group":"access_type","name":"Member"},"436":{"id":"436","opt_group":"access_type","name":"Accountant"},'+
        '"437":{"id":"437","opt_group":"access_type","name":"Auditor"},"438":{"id":"438","opt_group":"access_type","name":"Society Manager"},"439":{"id":"439","opt_group":"access_type","name":"Property Manager"},"440":{"id":"440","opt_group":"access_type","name":"Leasors"},"441":{"id":"441","opt_group":"access_type","name":"Tenants"},"442":{"id":"442","opt_group":"access_type","name":"Residents"},"443":{"id":"443","opt_group":"access_type","name":"No Access"},"445":{"id":"445","opt_group":"access_type","name":"Property Group"}}';
        options = JSON.parse(options);
        vm.options = [];
        angular.forEach(options,function(val,key){
            vm.options.push(val);
        });

        vm.toggleCheck = function () {
            alert('hi');
            vm.checkbox = !vm.checkbox;
        }

        vm.attachmentChanged = function(a){
            angular.forEach(a,function(val){
                vm.attach.push(val);
            });
        };
        vm.categories =  ['Bills & Payments', 'Housekeeping', 'Maintenance', 'Security', 'Documentation', 'Common Facilities', 'Parking', 'SocietyWise', 'Other'];
        //File Upload
        vm.uploadPic = function(file) {
          if(!skvSocieties.selected.property.id){
            vm.propertyError = 'Please select property';
            return;
          }
          else {
            vm.propertyError = false;
          }
            if (angular.isArray(vm.attach)) {
                //Multiple files
                if (vm.attach.length > 5) {
                    vm.fileError = "Only 5 images allowed";
                } else {
                    vm.fileError = "";
                }
            }
            console.log(vm.fileError);

            if (!vm.fileError || vm.fileError === "") {
                file.upload = Upload.upload({
                    url: urlVals.baseUrl+urlVals.tickets.url,
                    data: {
                        headline: vm.title,
                        description: vm.description,
                        type: vm.type,
                        category: vm.category,
                        priority: vm.checkbox ? '395' : '397',
                        accessId: skvSocieties.selected.property.id,
                        attach: vm.attach
                    },
                }).then(function(res) {
                    $timeout(function() {
                        console.log(res);
                        if (res.status === 200) {
                            alert(res.data.message);
                            DS.getUpdate("tickets").then(function(data) {
                                //tickets.getDataAndRender();
                                $state.go('menu.tickets');
                            });

                        }
                    });
                }, function(err) {
                    if (err.status > 0)
                        vm.errorMsg = err.status + ': ' + err.data;
                        vm.serverSideErrorMessage = err.data;
                });
            }
        };

        //Add tickets function
        vm.addTicket = function() {
            vm.accessId = "83b36c2e";
            var body = $httpParamSerializerJQLike({
                headline: vm.title,
                description: vm.description,
                type: vm.type,
                category: vm.category,
                priority: vm.priority,
                accessId: vm.accessId
            });
            //$http.post("http://demo.societywise.in/api/v1/tickets", body).then(function(res) {
            $http.post(urlVals.baseUrl+urlVals.tickets.url, body).then(function(res) {
                    console.log(res);
                    if (res.status === 200) {
                        alert(res.data.message);
                        vm.ticketId = res.data.data.ticketId;
                        Tickets.getUpdated();
                        $state.go('menu.tickets');
                    }
                },
                function(err) {
                    console.log(err);
                    alert(err.data.message);
                });
        }
    }

    controllerAddTicket.$inject = depsAddTicket;
    appTickets.controller('main.tickets.addTicket', controllerAddTicket);
