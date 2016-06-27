export default ngModule => {
ngModule.controller('SearchYouTube', function($sce, youtubeSearch){
    const vm = this;
    vm.videos = [];
    vm.selected = {};
    vm.srcVideo = null;
    vm.Search = () => {
        let request = youtubeSearch.getVideos(vm.search);
        request.then((res)=>{
            vm.videos = res.data;
            vm.selected = res.data[0];
            console.log(vm.videos);
        });
    }
    vm.onSelectVideo = (video) => {
        vm.selected = video;
    }
    vm.makeUrl = (url) => {
        return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + url);
    }
})
}
