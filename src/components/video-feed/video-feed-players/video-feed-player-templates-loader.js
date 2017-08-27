export const videoFeedPlayerTemplatesLoader = ($templateCache) => {
  'ngInject';

  const templateMap = {
    url: 'url.pug',
    youtube: 'youtube.pug',
    facebook: 'facebook.pug'
  };

  Object.keys(templateMap).forEach(template => {
    $templateCache.put(template, require(`./${templateMap[template]}`)());
  });
};