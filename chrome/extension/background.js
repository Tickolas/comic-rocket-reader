/* global chrome */

import http from 'axios'
import { FETCH_COMICS, LOGIN_CHECK } from '../../app/api/Paths'
import { countUnreadPages } from '../../app/utils/ComicsUtil'

const defaultStorage = {
  comics: [],
  backlog: []
}

const checkLogin = () => {
  http.get(LOGIN_CHECK).then(() => {
    chrome.storage.local.get('comicRocketReader', storage => {
      const comicRocketReader = storage.comicRocketReader || defaultStorage
      comicRocketReader.isLoggedIn = true
      updateComics(comicRocketReader)
    })
  }).catch(() => {
    chrome.browserAction.setBadgeText({ text: '' })
    chrome.storage.local.set({comicRocketReader: {
      isLoggedIn: false
    }})
  })

  setTimeout(() => {
    checkLogin()
  }, 30000)
}

const updateComics = comicRocketReader => {
  http.get(FETCH_COMICS).then((result) => {
    const unreadPages = countUnreadPages(result.data.filter(comic => comicRocketReader.backlog.indexOf(comic.slug) === -1))
    chrome.browserAction.setBadgeText({ text: unreadPages < 10000 ? '' + unreadPages : 'Lots' })
    comicRocketReader.comics = result.data
    chrome.storage.local.set({comicRocketReader})
  })
}

checkLogin()
