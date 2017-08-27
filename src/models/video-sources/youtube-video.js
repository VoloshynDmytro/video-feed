import { Video } from './video';

export class YoutubeVideo extends Video {

  constructor(data) {
    super(data);
  }

  isMissed() {
    return !this.videoId;
  }

  get url() {
    return `https://www.youtube.com/embed/${this.videoId}`;
  }

  get missed() {
    return 'Youtube video is missing.';
  }
}
