import { Video } from './video';

export class FacebookVideo extends Video {

  constructor(data) {
    super(data);
  }

  isMissed() {
    return !this.videoId;
  }

  get missed() {
    return 'Facebook video is missing.';
  }

  get url() {
    return `https://www.facebook.com/facebook/videos/${this.videoId}/`;
  }
}
