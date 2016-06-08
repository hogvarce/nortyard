angular.module('App')
.controller('CompanyCtrl', function CompanyCtrl($scope, $localStorage, $sessionStorage) {
    $scope.company = [];
    $scope.$storage = $localStorage.$default({
        company: []
    });
    $scope.onCreate = function(){
       $scope.$storage.company.push({
           "company_id": $scope.company.company_id,
           "company_name": $scope.company.company_name,
           "description": $scope.company.description,
           "logo": $scope.company.logo
       });
       $.jGrowl("Ура! Запись создана.", {position: 'bottom-right'});
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
});
