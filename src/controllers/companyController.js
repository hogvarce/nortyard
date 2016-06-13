export default App => {
App.controller('CompanyCtrl', function CompanyCtrl($scope, $localStorage, $sessionStorage, $q) {

    let asyncGreet = function () {
      var deferred = $q.defer();
      setTimeout(function() {
          deferred.resolve();
      }, 3500);
      return deferred.promise;
    }

    let promise = asyncGreet();

    $scope.company = [];
    $scope.$storage = $localStorage.$default({
        company: []
    });
    $scope.onCreate = function(){
        promise.then(function() {
           $scope.$storage.company.push({
               "company_id": $scope.company.company_id,
               "company_name": $scope.company.company_name,
               "description": $scope.company.description,
               "logo": $scope.company.logo
           });
           $.jGrowl("Ура! Запись создана.", {position: 'bottom-right'});
       }, function(reason) {
           $.jGrowl("Ошибка записи", {position: 'bottom-right'});
       });
    }
    $scope.onRemove = function(item, index){
        if (confirm("Ты точно не передумаешь?")){
            $scope.$storage.company.splice(index, 1);
            $.jGrowl("Запись удалена.", {position: 'bottom-right'});
        }
    }
    $scope.onEdit = function(item, index){
        if (confirm("Уверены в изменениях?")){
             $scope.$storage.company.splice(index, 1, item);
            $.jGrowl("Запись изменена.", {position: 'bottom-right'});
        }
    }
    $scope.setFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.company.logo = element.files[0].name;
        });
    }
});
}
