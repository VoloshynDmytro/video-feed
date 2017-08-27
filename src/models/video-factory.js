import { FacebookVideo, YoutubeVideo, UrlVideo } from './video-sources';

export class VideoFactory {

  constructor() {
    this.videoClass = UrlVideo;
  }

  static create(video) {
    switch (video.source) {
    case 'youtube':
      this.videoClass = YoutubeVideo;
      break;
    case 'facebook':
      this.videoClass = FacebookVideo;
      break;
    case 'url':
      this.videoClass = UrlVideo;
      break;
    }

    return new this.videoClass(video);
  }
}
