import ChromeUtils from '../../app/utils/ChromeUtils';
import { ComicWith } from '../mock/Comics.mock';

window.chrome = {
  tabs: {
    create: jest.fn()
  }
};

describe('ChromeUtils', () => {
  describe('function to open up a new tab for a comic', () => {
    it('should exist', () => {
      expect(ChromeUtils.openNewTabFor).toBeDefined();
    });

    it('should open up a new tab for a valid comic without closing the extension', () => {
      ChromeUtils.openNewTabFor(ComicWith.UNREAD_PAGES);

      expect(window.chrome.tabs.create).toHaveBeenCalledWith({
        active: false, url: encodeURI(ComicWith.UNREAD_PAGES.uri)
      });
    });

    it('should open up a new tab for a valid comic and close the extension', () => {
      ChromeUtils.openNewTabFor(ComicWith.UNREAD_PAGES, true);

      expect(window.chrome.tabs.create).toHaveBeenCalledWith({
        active: true, url: encodeURI(ComicWith.UNREAD_PAGES.uri)
      });
    });
  });
});
