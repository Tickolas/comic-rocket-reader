/* global chrome */

import http from 'axios'
import Paths from './Paths'
import store from '../store/Store'
import { COMICS_FETCHED, FETCH_COMICS } from '../constants/ActionTypes'

function get () {
  chrome.storage.local.get(['comicRocketReader'], (data) => {
    let comics

    if (data.comicRocketReader && data.comicRocketReader.comics) {
      comics = data.comicRocketReader.comics
    } else {
      return http.get(Paths.FETCH_COMICS).then((result) => {
        comics = result.data
      }).catch(() => {
        comics = []
      })
    }

    store.dispatch({
      type: COMICS_FETCHED,
      payload: {
        comics,
        backlog: data.comicRocketReader.backlog || []
      }
    })
  })
}

function addToBacklog (comic) {
  chrome.storage.local.get(['comicRocketReader'], (data) => {
    const backlog = data.comicRocketReader.backlog || []

    backlog.push(comic.slug)

    chrome.storage.local.set({
      comicRocketReader: {...data.comicRocketReader, backlog}
    })

    store.dispatch({
      type: FETCH_COMICS
    })
  })
}

function removeFromBacklog (comic) {
  chrome.storage.local.get(['comicRocketReader'], (data) => {
    const backlog = data.comicRocketReader.backlog || []
    const index = backlog.indexOf(comic.slug)

    if (index !== -1) {
      backlog.splice(index, 1)

      chrome.storage.local.set({
        comicRocketReader: {...data.comicRocketReader, backlog}
      })

      store.dispatch({
        type: FETCH_COMICS
      })
    }
  })
}

export default {
  get,
  addToBacklog,
  removeFromBacklog
}
