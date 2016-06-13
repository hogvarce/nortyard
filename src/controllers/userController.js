export default App => {
App.controller('UserCtrl', function UserCtrl($scope, $localStorage, $sessionStorage, $q) {

    let asyncGreet = function () {
      var deferred = $q.defer();
      setTimeout(function() {
          deferred.resolve();
      }, 3500);
      return deferred.promise;
    }

    let promise = asyncGreet();

    $scope.user = [];
    $scope.$storage = $localStorage.$default({
        user: []
    });
    $scope.onCreate = function(){
        promise.then(function() {
           $scope.$storage.user.push({
               "user_id": $scope.user.user_id,
               "nickname": $scope.user.nickname,
               "department_id": $scope.user.department_id,
               "person_id": $scope.user.person_id,
               "position_id": $scope.user.position_id,
               "super_user": $scope.user.super_user
           });
           $.jGrowl("Ура! Запись создана.", {position: 'bottom-right'});
       }, function(reason) {
           $.jGrowl("Ошибка записи", {position: 'bottom-right'});
       });
    }
    $scope.onRemove = function(item, index){
        if (confirm("Ты точно не передумаешь?")){
            $scope.$storage.user.splice(index, 1);
            $.jGrowl("Запись удалена.", {position: 'bottom-right'});
     }
    }
    $scope.onEdit = function(item, index){
        if (confirm("Уверены в изменениях?")){
            $scope.$storage.user.splice(index, 1, item);
            $.jGrowl("Запись изменена.", {position: 'bottom-right'});
        }
    }
});
}
