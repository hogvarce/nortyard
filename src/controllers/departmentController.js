angular.module('App')
.controller('DepartmentCtrl', function DepartmentCtrl($scope, $localStorage, $sessionStorage, $q) {

    let asyncGreet = function () {
      var deferred = $q.defer();
      setTimeout(function() {
          deferred.resolve();
      }, 3500);
      return deferred.promise;
    }

    let promise = asyncGreet();

    $scope.department = [];
    $scope.$storage = $localStorage.$default({
        department: []
    });
    $scope.onCreate = function(){
        promise.then(function() {
           $scope.$storage.department.push({
               "department_id": $scope.department.department_id,
               "department_name": $scope.department.department_name,
               "company_id": $scope.department.company_id
           });
           $.jGrowl("Ура! Запись создана.", {position: 'bottom-right'});
       }, function(reason) {
           $.jGrowl("Ошибка записи", {position: 'bottom-right'});
       });
    }
    $scope.onRemove = function(item, index){
        if (confirm("Ты точно не передумаешь?")){
            $scope.$storage.department.splice(index, 1);
            $.jGrowl("Запись удалена.", {position: 'bottom-right'});
        }
    }
    $scope.onEdit = function(item, index){
        if (confirm("Уверены в изменениях?")){
            $scope.$storage.department.splice(index, 1, item);
            $.jGrowl("Запись изменена.", {position: 'bottom-right'});
        }
    }
});
