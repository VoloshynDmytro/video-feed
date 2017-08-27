import VideoFeedPage from './video-feed.page';
import NavbarPage from '../common/navbar.page';


describe('VideoFeedPage', () => {
  let videoFeedPage;
  let navbarPage;

  beforeAll(async() => {
    videoFeedPage = new VideoFeedPage();
    navbarPage = new NavbarPage();
  });

  beforeEach(async() => {
    console.log('Loading the Video Feeds page...');
    await videoFeedPage.load();
  });

  it('should load with correct title', async() => {
    const actualTitle = await navbarPage.getTitle();
    expect(actualTitle).toEqual('Video Feed');
  });

  it('should load with correct header', async() => {
    const actualHeader = await navbarPage.getHeader();
    expect(actualHeader).toEqual('Video Feed');
  });

  describe('Video List', () => {

    it('should be visible', async () => {
      const isVisible = await videoFeedPage.videoList.isVisible();
      expect(isVisible).toEqual(true);
    });

    it('should have 5 items', async () => {
      const actualCount = await videoFeedPage.videoList.getCount();
      expect(actualCount).toEqual(5);
    });

  });

});

