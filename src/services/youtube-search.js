export default ngModule => {
    ngModule.service('youtubeSearch', function($http, $q){
        this.getVideos = (request) => {
            const API_KEY = 'AIzaSyB7Oa57QXJwmPTHBedbChar8_BGFG3xNLo';
            const ROOT_URL = `https://www.googleapis.com/youtube/v3/search`;
            const url = `${ROOT_URL}?part=snippet&key=${API_KEY}&q=${request}&type=video`
            let deferred = $q.defer();
            $http.get(url)
                .success(function(data) {
                    deferred.resolve({
                        data: data.items
                    });
                }).error(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });
                return deferred.promise;
        }
    })
}
