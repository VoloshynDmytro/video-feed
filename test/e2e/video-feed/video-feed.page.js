import VideoList from './components/video-list.page';

export default class VideoFeedPage {
  constructor() {

    this._containerElement = element(by.css('.main-wrapper'));
    this._videoList = new VideoList(this._containerElement)
  }

  load() {
    return browser.get('/video-feed');
  }

  get videoList() {
    return this._videoList;
  }
}

