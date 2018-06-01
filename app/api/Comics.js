/* global chrome */

import http from 'axios'
import { FETCH_COMICS } from './Paths'
import store from '../store/Store'
import { COMICS_FETCHED } from '../constants/ActionTypes'

function get () {
  chrome.storage.local.get(['comicRocketReader'], (data) => {
    let comics

    if (data.comicRocketReader && data.comicRocketReader.comics) {
      comics = data.comicRocketReader.comics
    } else {
      return http.get(FETCH_COMICS).then((result) => {
        comics = result.data
      }).catch(() => {
        comics = []
      })
    }

    store.dispatch({
      type: COMICS_FETCHED,
      payload: {
        comics
      }
    })
  })
}

export default {
  get
}
