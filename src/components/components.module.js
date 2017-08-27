import angular from 'angular';
import { VideoFeedModule } from './video-feed/video-feed.module';

export const ComponentsModule = angular
  .module('vf-app.components', [
    VideoFeedModule,
  ])
  .name;
