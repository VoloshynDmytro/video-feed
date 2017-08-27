export const customTemplatesConfig = ($templateCache) => {
  'ngInject';

  $templateCache.put('spinner', require('../spinner/spinner.pug')());
};
