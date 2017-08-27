export default class SpinnerService {

  constructor($mdDialog, $templateCache) {
    'ngInject';

    this.$templateCache = $templateCache;
    this.$mdDialog = $mdDialog;
  }

  show() {
    this.$mdDialog.show({
      template: this.$templateCache.get('spinner'),
      parent: angular.element(document.body),
      clickOutsideToClose: false,
      fullscreen: false,
    });
  }

  hide() {
    this.$mdDialog.hide();
  }

}
