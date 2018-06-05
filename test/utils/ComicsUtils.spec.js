/* global describe it expect */

import ComicsUtils from '../../app/utils/ComicsUtil'
import { ComicsMock, ComicWith } from '../mock/Comics.mock'
import { BY_COMIC_NAME, BY_UNREAD_PAGES } from '../../app/constants/SortModes'

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

    it('should sort comics marked as backlog', () => {
      const result = ComicsUtils.sortReadUnreadComics([ComicWith.UNREAD_PAGES, ComicWith.MANY_UNREAD_PAGES], [ComicWith.MANY_UNREAD_PAGES.slug])

      expect(result.backloggedComics).toEqual([ComicWith.MANY_UNREAD_PAGES])
      expect(result.unreadComics).toEqual([ComicWith.UNREAD_PAGES])
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

  describe('function to compare comics for sorting', () => {
    it('should exist', () => {
      expect(ComicsUtils.compareComics).toBeDefined()
    })

    it('should sort three comics by name correctly', () => {
      const comicsToSort = [ComicWith.NO_UNREAD_PAGES, ComicWith.MANY_UNREAD_PAGES, ComicWith.UNUSUAL_NAME]
      const expected = [ComicWith.MANY_UNREAD_PAGES, ComicWith.NO_UNREAD_PAGES, ComicWith.UNUSUAL_NAME]
      expect(comicsToSort.sort((a, b) => ComicsUtils.compareComics(a, b, BY_COMIC_NAME, false))).toEqual(expected)
    })

    it('should sort three comics by name reversed correctly', () => {
      const comicsToSort = [ComicWith.NO_UNREAD_PAGES, ComicWith.MANY_UNREAD_PAGES, ComicWith.UNUSUAL_NAME]
      const expected = [ComicWith.UNUSUAL_NAME, ComicWith.NO_UNREAD_PAGES, ComicWith.MANY_UNREAD_PAGES]
      expect(comicsToSort.sort((a, b) => ComicsUtils.compareComics(a, b, BY_COMIC_NAME, true))).toEqual(expected)
    })

    it('should sort three comics by pages left correctly', () => {
      const comicsToSort = [ComicWith.UNUSUAL_NAME, ComicWith.MANY_UNREAD_PAGES, ComicWith.UNREAD_PAGES]
      const expected = [ComicWith.UNUSUAL_NAME, ComicWith.UNREAD_PAGES, ComicWith.MANY_UNREAD_PAGES]
      expect(comicsToSort.sort((a, b) => ComicsUtils.compareComics(a, b, BY_UNREAD_PAGES, false))).toEqual(expected)
    })

    it('should sort three comics by pages left reversed correctly', () => {
      const comicsToSort = [ComicWith.UNUSUAL_NAME, ComicWith.MANY_UNREAD_PAGES, ComicWith.UNREAD_PAGES]
      const expected = [ComicWith.MANY_UNREAD_PAGES, ComicWith.UNREAD_PAGES, ComicWith.UNUSUAL_NAME]
      expect(comicsToSort.sort((a, b) => ComicsUtils.compareComics(a, b, BY_UNREAD_PAGES, true))).toEqual(expected)
    })
  })
})
