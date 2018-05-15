/* global describe jest it expect */

import BadgeUtils from '../../app/utils/BadgeUtils'
import { ComicsMock, ComicWith } from '../mock/Comics.mock'

window.chrome = {
  browserAction: {
    setBadgeText: jest.fn()
  }
}

describe('BadgeUtils', () => {
  describe('function to change badge text', () => {
    it('should exist', () => {
      expect(BadgeUtils.updateBadgeText).toBeDefined()
    })

    it('should show correct number of unread pages', () => {
      BadgeUtils.updateBadgeText(ComicsMock)

      expect(window.chrome.browserAction.setBadgeText).toHaveBeenCalledWith({ text: 42 })
    })

    it('should show placeholder if there are more than 999 unread pages', () => {
      BadgeUtils.updateBadgeText([
        ComicWith.MANY_UNREAD_PAGES
      ])

      expect(window.chrome.browserAction.setBadgeText).toHaveBeenCalledWith({ text: '...' })
    })

    it('should show empty badge if there are no unread pages', () => {
      BadgeUtils.updateBadgeText([
        ComicWith.NO_UNREAD_PAGES,
        ComicWith.ERRONEOUS_PAGE_COUNT
      ])

      expect(window.chrome.browserAction.setBadgeText).toHaveBeenCalledWith({ text: '' })
    })
  })
})
