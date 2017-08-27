describe('VideoFeedItemComponent', function () {

  beforeEach(angular.mock.module('vf-app.components.video-feed.video-feed-item'));

  beforeEach(angular.mock.module(function ($provide, $urlRouterProvider) {

    $urlRouterProvider.deferIntercept();
  }));

});