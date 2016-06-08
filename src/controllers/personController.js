angular.module('App')
.controller('PersonCtrl', function PersonCtrl($scope, $localStorage, $sessionStorage) {
  $scope.person = [];
  $scope.$storage = $localStorage.$default({
      person: []
  });
  $scope.onCreate = function(){
     $scope.$storage.person.push({
         "person_id": $scope.person.person_id,
         "first_name": $scope.person.first_name,
         "last_name": $scope.person.last_name,
         "middle_name": $scope.person.middle_name,
         "email": $scope.person.email,
         "phone_number": $scope.person.phone_number
     });
     $.jGrowl("Ура! Запись создана.", {position: 'bottom-right'});
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
});