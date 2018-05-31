/* global chrome */

import http from 'axios'
import { FETCH_COMICS } from '../../app/api/Paths'

const updateComics = () => {
  http.get(FETCH_COMICS).then((result) => {
    chrome.storage.local.set({comicRocketReader: {
      comics: result.data
    }})
  })

  setTimeout(() => {
    updateComics()
  }, 120000)
}

updateComics()

require('./background/badge')
