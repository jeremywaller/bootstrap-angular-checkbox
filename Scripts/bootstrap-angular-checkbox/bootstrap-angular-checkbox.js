otaCommon.directive('bootstrapAngularCheckbox', 
[

function () {
    return {
        restrict: 'E',
        templateUrl: "Scripts/bootstrap-angular-checkbox/bootstrap-angular-checkbox-template.html",
        scope: {            
            title: "@",
            bootstrapTabIndex: "@", //useful for setting the tab index of the actual input checkbox
            ngModel: "="
        },

        link: function (scope, element, attributes, controller, transcludeFunction) {
        }
    }
}])