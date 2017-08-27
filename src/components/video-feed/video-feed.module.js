import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { VideoFeedComponent } from './video-feed.component';
import { VideoFeedService } from './video-feed.service';
import { VideoFeedItemModule } from './video-feed-item/video-feed-item.module';
import { videoFeedPlayerTemplatesLoader } from './video-feed-players/video-feed-player-templates-loader';

export const VideoFeedModule = angular
  .module('vf-app.components.video-feed', [
    uiRouter,
    VideoFeedItemModule,
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/video-feed');

    $stateProvider
      .state('video-feed', {
        url: '/video-feed',
        component: 'videoFeed',
        resolve: {
          videos: (VideoFeedService) => {
            'ngInject';
            return VideoFeedService.getVideos();
          }
        },
        title: 'Video Feed'
      });
  })
  .component('videoFeed', VideoFeedComponent)
  .service('VideoFeedService', VideoFeedService)
  .run(videoFeedPlayerTemplatesLoader)
  .name;
