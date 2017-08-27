import angular from 'angular';
import { VideoFeedItemComponent } from './video-feed-item.component';
import { VideoFeedItemPlayerDirective } from './video-feed-item-player.directive';

export const VideoFeedItemModule = angular
    .module('vf-app.components.video-feed.video-feed-item', [])
    .component('videoFeedItem', VideoFeedItemComponent)
    .directive('videoFeedPlayer', VideoFeedItemPlayerDirective)
    .name;
