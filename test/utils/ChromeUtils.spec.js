/* global describe beforeEach jest it expect */

import ChromeUtils from '../../app/utils/ChromeUtils'
import { ComicWith } from '../mock/Comics.mock'

describe('ChromeUtils', () => {
  beforeEach(() => {
    window.chrome = {
      tabs: {
        create: jest.fn()
      }
    }
  })

  describe('function to open up a single new tab for a comic', () => {
    it('should exist', () => {
      expect(ChromeUtils.openSingleNewTabFor).toBeDefined()
    })

    it('should open up a new tab for a valid comic and close the extension', () => {
      ChromeUtils.openSingleNewTabFor(ComicWith.UNREAD_PAGES, true)

      expect(window.chrome.tabs.create).toHaveBeenCalledWith({
        active: true, url: 'http://www.comic-rocket.com/read/a-mad-tea-party/2?mark'
      })
    })

    it('should open up a new tab for a comic with special characters in its URL', () => {
      ChromeUtils.openSingleNewTabFor(ComicWith.UNUSUAL_NAME)

      expect(window.chrome.tabs.create).toHaveBeenCalledWith({
        active: true, url: 'http://www.comic-rocket.com/read/%C3%A5kes-bilder/2?mark'
      })
    })
  })
  describe('function to open up multiple new tabs', () => {
    it('should exist', () => {
      expect(ChromeUtils.openAllComicsInTabs).toBeDefined()
    })

    it('should open up one new tab for a valid comic without closing the extension and one with closing', () => {
      ChromeUtils.openAllComicsInTabs([ComicWith.UNREAD_PAGES, ComicWith.UNREAD_PAGES])

      expect(window.chrome.tabs.create).toHaveBeenCalledWith({
        active: false, url: 'http://www.comic-rocket.com/read/a-mad-tea-party/2?mark'
      })
      expect(window.chrome.tabs.create).toHaveBeenCalledWith({
        active: true, url: 'http://www.comic-rocket.com/read/a-mad-tea-party/2?mark'
      })
    })
  })
})
