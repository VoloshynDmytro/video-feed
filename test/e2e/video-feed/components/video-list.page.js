class VideoList {

  constructor(hostElement) {
    this._containerElement = hostElement.element(by.css('.video-feed'));
    this._itemElements = this._containerElement.all(by.css('.video-feed__item'));
  }

  isVisible() {
    return this._containerElement.isPresent();
  }

  getCount() {
    return this._itemElements.count();
  }
}

export default VideoList;