import template from './navbar.pug';
import './navbar.styl';

export const NavbarComponent = {
  bindings: {},
  template: template(),
  controller: class NavbarComponent {

    constructor($state) {
      'ngInject';
      this.$state = $state;
    }

    $onInit() {
    }

    get currentState() {
      return this.$state.current.title;
    }

  },
};
