import isEmpty from 'lodash/isEmpty';

export class Video {

  constructor(data) {
    if (!isEmpty(data)) {
      Object.assign(this, data);
    }
    else {
      throw new Error('Video data was not passed');
    }
  }

  isMissed() {
    throw new Error('Video#isMissed needs to be overridden.');
  }

  get missed() {
    throw new Error('Video#missed needs to be overridden.');
  }

}
