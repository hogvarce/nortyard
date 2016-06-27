export default ngModule => {
    ngModule.directive('listVideos', function(){
        return{
            restrict: 'E',
            scope: false,
            templateUrl: '/src/templates/list-videos.html',
            controller: 'SearchYouTube',
            controllerAs: 'vm'
        }
    });
}
