// вью всего блока видео
const VideoLayout = Marionette.LayoutView.extend({
    template: "#layout-view-template",
    regions: {
        selected: "#selected",
        list: "#list"
    },
    ui: {
        item: '#list .thumb'
    },
    events: {
        'click @ui.item': 'changeSelected'
    },
    changeSelected: (e) => {
        let item = $(e.target).parent().parent();
        let desc =item.children('.desc').text();
        let idVideo = item.data('id');
        let title = item.children('.title').text();
        $('#selected iframe').attr('src','https://www.youtube.com/embed/'+idVideo);
        $('#selected p').text(desc);
        $('#selected h1').text(title);
    }
});

export default VideoLayout;
