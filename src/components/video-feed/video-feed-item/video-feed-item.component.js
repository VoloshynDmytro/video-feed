import NumAbbr from 'number-abbreviate';
import template from './video-feed-item.pug';
import './video-feed-item.styl';
import placeholderImage from '../../../assets/images/video-placeholder.jpg';

export const VideoFeedItemComponent = {
  bindings: {
    video: '<'
  },
  template: template(),
  controller: class VideoFeedItemComponent {

    constructor() {
    }

    $onInit() {
      this.placeholder = placeholderImage;
      this.video.viewsAbbr =  new NumAbbr().abbreviate(this.video.views, 1);
    }

  }
};
