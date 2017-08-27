import template from './video-feed.pug';
import './video-feed.styl';

export const VideoFeedComponent = {
  bindings: {
    videos: '<'
  },
  template: template(),
  controller: class VideoFeedComponent {

    constructor() {
    }

    $onInit() {
    }

  },
};
