// import libs
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';
import SpinnerService from './spinner/spinner.service';
import spinnerHook from './spinner/spinner.hook';
// import configs
import {
    mainConfig,
    materialConfig,
    apiConfig,
    customTemplatesConfig,
} from './config';

export const CoreModule = angular
    .module('app.core', [
      ngAnimate,
      ngAria,
      ngSanitize,
      ngMaterial,
    ])
    .constant('api', apiConfig)
    .service('SpinnerService', SpinnerService)
    .config(mainConfig)
    .config(materialConfig)
    .run(customTemplatesConfig)
    .run(spinnerHook)
    .name;
