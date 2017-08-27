import { VideoFactory } from '../../models/video-factory';

export class VideoFeedService {

  constructor($http, api) {
    'ngInject';

    this.$http = $http;
    this.api = api;
  }

  getVideos() {
    return this.$http.get(this.api.url)
      .then((resp) => {
        if (resp.data && resp.data.items) {
          return resp.data.items.map(item => VideoFactory.create(item));
        }
        else {
          return resp.data;
        }
      });
  }

}
