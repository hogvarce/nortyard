module.exports = angular.module('Directives')
.directive('headers', () => {
       return {
          restrict: 'E',
          scope: {},
          templateUrl: '../../templates/headers.tpl.html',
          controller: 'HeadersCtrl',
          controllerAs: 'vm'
       }
})
