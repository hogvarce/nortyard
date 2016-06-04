import YTSearch from 'youtube-api-search';

import VideoCollectionView from './views/video_collection_view';
import VideoLayout from './views/video_layout';
import VideoSelected from './views/video_selected';

const API_KEY = 'AIzaSyB7Oa57QXJwmPTHBedbChar8_BGFG3xNLo';

const App = new Marionette.Application();


App.addRegions({
    "mainRegion": "#main"
});

App.on('start', function() {
  Backbone.history.start();
});

let MyController = Marionette.Controller.extend({
  home: (id) => {
      videoSearch(id);
      $(document).on('click', 'button.btn', (event)=>{
         router.navigate($('input[name="search"]').val(), {trigger: true, replace: true});
      })
  }
});

let myController = new MyController();

let MyRouter = Marionette.AppRouter.extend({});

let router = new MyRouter();
router.processAppRoutes(myController, {
  ":id": "home"
});

App.start();

$(document).on('click', (event)=>{
     router.navigate($('input[name="search"]').val(), {trigger: true, replace: true});
});

function videoSearch(id){
    YTSearch({key: API_KEY, term: id}, (videos) => {

        console.log(videos);

        let collection = [];

        for (let video in videos){
            collection.push({
                id: videos[video].id.videoId,
                desc: videos[video].snippet.description,
                thumb: videos[video].snippet.thumbnails.default.url,
            });
        }

        let collectionView =  new VideoCollectionView({
            collection: new Backbone.Collection(collection)
        });

        let selectedView = new VideoSelected({model: new Backbone.Model(collection[0])});

        let layout = new VideoLayout();

        App.mainRegion.show(layout);
        layout.showChildView('list', collectionView);
        layout.showChildView('selected', selectedView);
    });
}
