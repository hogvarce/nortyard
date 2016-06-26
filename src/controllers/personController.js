module.exports = angular.module('Controllers')
.controller('PersonCtrl', function PersonCtrl($scope, $localStorage, $sessionStorage, $q) {

    let asyncGreet = function () {
      var deferred = $q.defer();
      setTimeout(function() {
          deferred.resolve();
      }, 1500);
      return deferred.promise;
    }

    let promise = asyncGreet();

  $scope.person = [];
  $scope.$storage = $localStorage.$default({
      person: []
  });
  $scope.onCreate = function(){
    promise.then(function() {
        $scope.$storage.person.push({
            "person_id": $scope.person.person_id,
            "first_name": $scope.person.first_name,
            "last_name": $scope.person.last_name,
            "middle_name": $scope.person.middle_name,
            "email": $scope.person.email,
            "phone_number": $scope.person.phone_number
        });
        $.jGrowl("Ура! Запись создана.", {position: 'bottom-right'});
    }, function(reason) {
        $.jGrowl("Ошибка записи", {position: 'bottom-right'});
    });
  }
  $scope.onRemove = function(item, index){
      if (confirm("Ты точно не передумаешь?")){
            $scope.$storage.person.splice(index, 1);
             $.jGrowl("Запись удалена.", {position: 'bottom-right'});
        }
  }
  $scope.onEdit = function(item, index){
      if (confirm("Уверены в изменениях?")){
          $scope.$storage.person.splice(index, 1, item);
          $.jGrowl("Запись изменена.", {position: 'bottom-right'});
      }
  }
})
