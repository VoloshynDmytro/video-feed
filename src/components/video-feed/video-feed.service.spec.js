import { apiConfig } from '../../core/config';
import videosMock from '../../../test/mocks/videos.mock';

describe('VideoFeedService', () => {
  beforeEach(angular.mock.module('vf-app.components.video-feed'));

  beforeEach(angular.mock.module(($provide, $urlRouterProvider) => {
    $provide.constant('api', apiConfig);
    $urlRouterProvider.deferIntercept();
  }));

  beforeEach(angular.mock.inject(function (_$httpBackend_, _VideoFeedService_) {
    this.videoFeedService = _VideoFeedService_;
    this._$httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    this._$httpBackend.verifyNoOutstandingExpectation();
    this._$httpBackend.verifyNoOutstandingRequest();
  });

  it('should get all videos', function () {
    this._$httpBackend
      .expect('GET', apiConfig.url)
      .respond(200, videosMock);

    this.videoFeedService.getVideos()
      .then((videos) => {
        expect(videos).toBeArrayOfObjects();
        expect(videos).toEqual(videosMock);
      });

    this._$httpBackend.flush();
  });
});

