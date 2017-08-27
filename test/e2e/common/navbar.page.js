class NavbarPage {

  constructor() {

    this._containerElement = element(by.css('navbar'));
    this._titleElement = element(by.css('title'));
    this._navbarElement = this._containerElement.element(by.css('.page-title'));
  }

  getTitle() {
    return this._titleElement.getAttribute('text')
  }

  getHeader() {
    return this._navbarElement.getText();
  }
}

export default NavbarPage;
