// вью всего блока видео
const VideoLayout = Marionette.LayoutView.extend({
    template: "#layout-view-template",
    regions: {
        selected: "#selected",
        list: "#list"
    },
    ui: {
        thumb: '.thumb img'
    },
    events: {
        'click @ui.thumb': 'changeSelected'
    },
    changeSelected: (domEvent) => {
        let desc = $(domEvent.target).parent().prev().text();
        let idVideo = domEvent.target.attributes[1].nodeValue;
        $('#selected iframe').attr('src','https://www.youtube.com/embed/'+idVideo);
        $('#selected p').text(desc);
    }
});

export default VideoLayout;
