import VideoItemView from './video_item_view';
// вью коллекции
const VideoCollectionView = Marionette.CollectionView.extend({
  childView: VideoItemView
});

export default VideoCollectionView;
