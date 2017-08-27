import { apiConfig } from '../../core/config';
import videosMock from '../../../test/mocks/videos.mock';

describe('VideoFeedComponent', function () {

  beforeEach(angular.mock.module('vf-app.components.video-feed'));

  beforeEach(angular.mock.module(function ($provide, $urlRouterProvider) {
    $provide.constant('api', apiConfig);
    $urlRouterProvider.deferIntercept();
  }));


  describe('state /video-feed', function () {

    beforeEach(angular.mock.inject(function (_$httpBackend_, _VideoFeedService_, _$state_, _$rootScope_, _$injector_) {
      this.videoFeedService = _VideoFeedService_;
      this._$httpBackend = _$httpBackend_;
      this._$state = _$state_;
      this._$rootScope = _$rootScope_;
      this._$injector = _$injector_;

      this.videos = videosMock;

      this._$httpBackend
          .expect('GET', apiConfig.url)
          .respond(200, this.videos);
    }));

    afterEach(function () {
      this._$httpBackend.verifyNoOutstandingExpectation();
      this._$httpBackend.verifyNoOutstandingRequest();
    });

    it('it should be possible to navigate to "videos" state', function () {
      this._$state.go('video-feed');
      this._$rootScope.$digest();
      this._$httpBackend.flush();

      expect(this._$state.current.name).toBe('video-feed');
      expect(this._$state.current.url).toBe('/video-feed');
    });

    it('should call service methods in resolve to get videos', function () {
      spyOn(this.videoFeedService, 'getVideos').and.callThrough();

      this._$state.go('video-feed');
      this._$rootScope.$digest();
      this._$httpBackend.flush();

      expect(this.videoFeedService.getVideos).toHaveBeenCalled();
    });

    it('should get, resolve and inject VIDEOS', function () {
      const state = this._$state.get('video-feed');

      this._$injector.invoke(state.resolve.videos)
          .then(resolvedVideos => {
            expect(resolvedVideos).toEqual(this.videos);
          });

      this._$httpBackend.flush();
    });

  });

});