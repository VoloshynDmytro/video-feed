import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { CoreModule } from './core/core.module';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import './assets/styles/app.styl';

angular
  .module('vf-app', [
    uiRouter,
    CoreModule,
    CommonModule,
    ComponentsModule,
  ])
  .component('app', AppComponent);

angular.bootstrap(document.body, ['vf-app']);
