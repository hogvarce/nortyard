export default ngModule => {
    ngModule.directive('videoDetail', function(){
        return{
            restrict: 'E',
            scope: false,
            templateUrl: '/src/templates/video-detail.html',
            controller: 'SearchYouTube',
            controllerAs: 'vm'
        }
    });
}
