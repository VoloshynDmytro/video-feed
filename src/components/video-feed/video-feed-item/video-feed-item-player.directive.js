export const VideoFeedItemPlayerDirective = ($compile, $templateCache, $sce) => {
  'ngInject';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      video: '='
    },
    link: function (scope, element, attrs) {
      const template = $templateCache.get(scope.video.source);

      scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
      };

      element.html(template);
      element.replaceWith($compile(element.html())(scope));
    }
  };
};