/* global chrome */

import http from 'axios'
import { FETCH_COMICS } from '../../app/api/Paths'
import { countUnreadPages } from '../../app/utils/ComicsUtil'

const updateComics = () => {
  http.get(FETCH_COMICS).then((result) => {
    chrome.storage.local.get('comicRocketReader', storage => {
      const unreadPages = countUnreadPages(result.data.filter(comic => storage.comicRocketReader.backlog.indexOf(comic.slug) === -1))
      chrome.browserAction.setBadgeText({ text: unreadPages < 10000 ? '' + unreadPages : 'Lots' })
      const comicRocketReader = storage.comicRocketReader || {}
      comicRocketReader.comics = result.data
      chrome.storage.local.set({comicRocketReader})
    })
  })

  setTimeout(() => {
    updateComics()
  }, 120000)
}

updateComics()
