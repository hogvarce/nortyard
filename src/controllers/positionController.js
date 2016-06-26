module.exports = angular.module('Controllers')
.controller('PositionCtrl', function PositionCtrl($scope, $localStorage, $sessionStorage, $q) {

    let asyncGreet = function () {
      var deferred = $q.defer();
      setTimeout(function() {
          deferred.resolve();
      }, 1500);
      return deferred.promise;
    }

    let promise = asyncGreet();

    $scope.position = [];
    $scope.$storage = $localStorage.$default({
        position: []
    });
    $scope.onCreate = function(){
        promise.then(function() {
           $scope.$storage.position.push({
               "position_id": $scope.position.position_id,
               "position_name": $scope.position.position_name,
               "salary": $scope.position.salary
           });
           $.jGrowl("Ура! Запись создана.", {position: 'bottom-right'});
       }, function(reason) {
           $.jGrowl("Ошибка записи", {position: 'bottom-right'});
       });
    }
    $scope.onRemove = function(item, index){
        if (confirm("Ты точно не передумаешь?")){
            $scope.$storage.position.splice(index, 1);
            $.jGrowl("Запись удалена.", {position: 'bottom-right'});
        }
    }
    $scope.onEdit = function(item, index){
        if (confirm("Уверены в изменениях?")){
            $scope.$storage.position.splice(index, 1, item);
            $.jGrowl("Запись изменена.", {position: 'bottom-right'});
        }
    }
});
