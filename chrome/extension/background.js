/* global chrome */

import http from 'axios'
import { FETCH_COMICS } from '../../app/api/Paths'
import { countUnreadPages } from '../../app/utils/ComicsUtil'

const updateComics = () => {
  http.get(FETCH_COMICS).then((result) => {
    const unreadPages = countUnreadPages(result.data)
    chrome.browserAction.setBadgeText({ text: unreadPages < 1000 ? '' + unreadPages : 'Lots' })
    chrome.storage.local.get('comicRocketReader', storage => {
      const comicRocketReader = storage.comicRocketReader
      comicRocketReader.comics = result.data
      chrome.storage.local.set({comicRocketReader})
    })
  })

  setTimeout(() => {
    updateComics()
  }, 120000)
}

updateComics()
