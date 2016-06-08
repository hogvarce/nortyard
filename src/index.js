const App = angular.module('App', ['ngRoute']);

App.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl : '/templates/person.tpl.html',
            controller  : 'PersonCtrl'
        })
        .when('/user', {
            templateUrl : '/templates/user.tpl.html',
            controller  : 'UserCtrl'
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
});

App.controller('PersonCtrl', function PhoneListController($scope) {
  $scope.persons = [];
  $scope.onCreate = function(){
     $scope.persons.push({
         "person_id": $scope.person.person_id,
         "first_name": $scope.person.first_name,
         "last_name": $scope.person.last_name,
         "middle_name": $scope.person.middle_name,
         "email": $scope.person.email,
         "phone_number": $scope.person.phone_number
     });
  }
  $scope.onRemove = function(item, index){
      $scope.persons.splice(index, 1);
  }
});
App.controller('UserCtrl', function PhoneListController($scope) {
  $scope.users = [];
  $scope.onCreate = function(){
     $scope.users.push({
         "user_id": $scope.user.user_id,
         "nickname": $scope.user.nickname,
         "department_id": $scope.user.department_id,
         "person_id": $scope.user.person_id,
         "position_id": $scope.user.position_id,
         "super_user": $scope.user.super_user
     });
  }
});
App.controller('PositionCtrl', function PhoneListController($scope) {
  $scope.persons = [];
  $scope.onCreate = function(){
     $scope.persons.push({
         "person_id": $scope.person.person_id,
         "first_name": $scope.person.first_name,
         "last_name": $scope.person.last_name,
         "middle_name": $scope.person.middle_name,
         "email": $scope.person.email,
         "phone_number": $scope.person.phone_number
     });
  }
});
App.controller('DepartmentCtrl', function PhoneListController($scope) {
  $scope.persons = [];
  $scope.onCreate = function(){
     $scope.persons.push({
         "person_id": $scope.person.person_id,
         "first_name": $scope.person.first_name,
         "last_name": $scope.person.last_name,
         "middle_name": $scope.person.middle_name,
         "email": $scope.person.email,
         "phone_number": $scope.person.phone_number
     });
  }
});
App.controller('CompanyCtrl', function PhoneListController($scope) {
  $scope.persons = [];
  $scope.onCreate = function(){
     $scope.persons.push({
         "person_id": $scope.person.person_id,
         "first_name": $scope.person.first_name,
         "last_name": $scope.person.last_name,
         "middle_name": $scope.person.middle_name,
         "email": $scope.person.email,
         "phone_number": $scope.person.phone_number
     });
  }
});
