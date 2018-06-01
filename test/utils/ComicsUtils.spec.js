/* global describe it expect */

import ComicsUtils from '../../app/utils/ComicsUtil'
import { ComicsMock, ComicWith } from '../mock/Comics.mock'

describe('ComicsUtils', () => {
  describe('function to sort comics into read and unread', () => {
    it('should exist', () => {
      expect(ComicsUtils.sortReadUnreadComics).toBeDefined()
    })

    it('should throw if comics are invalid', () => {
      expect(() => ComicsUtils.sortReadUnreadComics('Definitely not comics')).toThrow('Must pass an array of comics.')
    })

    it('should sort comics with unread pages from ones with no unread', () => {
      const result = ComicsUtils.sortReadUnreadComics([ComicWith.UNREAD_PAGES, ComicWith.NO_UNREAD_PAGES, ComicWith.ERRONEOUS_PAGE_COUNT])

      expect(result.unreadComics).toEqual([ComicWith.UNREAD_PAGES])
      expect(result.readComics).toEqual([ComicWith.NO_UNREAD_PAGES])
      expect(result.erroneousComics).toEqual([ComicWith.ERRONEOUS_PAGE_COUNT])
    })
  })

  describe('filter comics with erroneous page count', () => {
    it('should exist', () => {
      expect(ComicsUtils.filterErroneous).toBeDefined()
    })

    it('should throw if passed anything but an array', () => {
      const testData = [123, {}, 'I am not an array']

      testData.forEach((data) => {
        expect(() => {
          ComicsUtils.filterErroneous(data)
        }).toThrow()
      })
    })

    it('should filter out "Dreamland Chronicles" comic with unread pages', () => {
      const result = ComicsUtils.filterErroneous(ComicsMock)

      expect(result).toHaveLength(1)
      expect(result[0].name).toEqual('Dreamland Chronicles')
    })
  })

  describe('function to count unread pages', () => {
    it('should exist', () => {
      expect(ComicsUtils.countUnreadPages).toBeDefined()
    })

    it('should throw if passed anything but an array', () => {
      const testData = [123, {}, 'I am not an array']

      testData.forEach((data) => {
        expect(() => {
          ComicsUtils.countUnreadPages(data)
        }).toThrow()
      })
    })

    it('should count number of total unread pages in mock', () => {
      const result = ComicsUtils.countUnreadPages([
        ComicWith.MANY_UNREAD_PAGES,
        ComicWith.NO_UNREAD_PAGES,
        ComicWith.UNREAD_PAGES,
        ComicWith.UNUSUAL_NAME
      ])

      expect(result).toEqual(3044)
    })
  })
})
