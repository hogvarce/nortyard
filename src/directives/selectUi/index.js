require('./select-ui.scss');

export default ngModule => {
    ngModule.directive('selectUi', function(){
        return {
            restrict: 'A',
            scope: {},
            template: `
                <option ng-repeat="item in items">{{item}}</option>
            `,
            link: function(scope, element, attrs){
                scope.items = [
                    1, 2, 3
                ];

            }
        }
    });
}
