import angular from 'angular';
import { NavbarModule } from './navbar/navbar.module';

export const CommonModule = angular
  .module('vf-app.common', [
    NavbarModule,
  ])
  .name;
