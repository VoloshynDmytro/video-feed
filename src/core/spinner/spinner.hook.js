export default ($transitions) => {
  'ngInject';

  $transitions.onStart({ }, (trans) => {
    const SpinnerService = trans.injector().get('SpinnerService');
    SpinnerService.show();
    trans.promise.finally(SpinnerService.hide());
  });
};
