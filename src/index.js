const ngModule = angular.module('App', ['ngRoute', 'ngStorage']);

ngModule.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : '/templates/person.tpl.html',
            controller  : 'PersonCtrl'
        })
        .when('/user', {
            templateUrl : '/templates/user.tpl.html',
            controller  : 'UserCtrl',
        })
        .when('/position', {
            templateUrl : '/templates/position.tpl.html',
            controller  : 'PositionCtrl'
        })
        .when('/department', {
            templateUrl : '/templates/department.tpl.html',
            controller  : 'DepartmentCtrl'
        })
        .when('/company', {
            templateUrl : '/templates/company.tpl.html',
            controller  : 'CompanyCtrl'
        })
        .otherwise({
            redirectTo: "/"
        })
});

require('./controllers')(ngModule);
require('./directives')(ngModule);
