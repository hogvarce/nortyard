export default ngModule => {
    ngModule.directive('searchBar', function(){
        return{
            restrict: 'E',
            scope: false,
            templateUrl: '/src/templates/search-bar.html',
            controller: 'SearchYouTube',
            controllerAs: 'vm'
        }
    })
}
