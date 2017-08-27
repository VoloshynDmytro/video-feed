export const mainConfig = ($logProvider, $httpProvider, $locationProvider) => {
  'ngInject';

  if ($logProvider.debugEnabled) {
    $logProvider.debugEnabled(true);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
};
