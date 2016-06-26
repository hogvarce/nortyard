angular.module('App', ['ngRoute', 'ngStorage', 'Directives', 'Controllers', 'Services'])

.config(function($routeProvider, $locationProvider){
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
    $locationProvider.html5Mode(true);
});
require('./services');
require('./controllers');
require('./directives');
