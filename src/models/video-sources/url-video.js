import { Video } from './video';

export class UrlVideo extends Video {

  constructor(data) {
    super(data);
  }

  isMissed() {
    return !this.url;
  }

  get missed() {
    return 'Video is missing.';
  }

  get title() {
    return this.url.split('/').pop();
  }

  get extension() {
    return `video/${this.url.split('.').pop()}`;
  }
}
