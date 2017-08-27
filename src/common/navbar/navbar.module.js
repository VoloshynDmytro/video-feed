import angular from 'angular';
import { NavbarComponent } from './navbar.component';

export const NavbarModule = angular
  .module('vf-app.common.navbar', [])
  .component('navbar', NavbarComponent)
  .name;

