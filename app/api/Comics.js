import http from 'axios'
import Paths from './Paths'
import store from '../store/Store'
import { COMICS_FETCHED, FETCH_COMICS } from '../constants/ActionTypes'
import ChromeStorage from './ChromeStorage'

function get () {
  let comics

  ChromeStorage.get().then(data => {
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
  ChromeStorage.get().then(data => {
    const backlog = data.comicRocketReader.backlog || []

    backlog.push(comic.slug)

    ChromeStorage.set({backlog}).then(() => {
      store.dispatch({
        type: FETCH_COMICS
      })
    })
  })
}

function removeFromBacklog (comic) {
  return ChromeStorage.get().then(data => {
    const backlog = data.comicRocketReader.backlog || []
    const index = backlog.indexOf(comic.slug)

    if (index !== -1) {
      backlog.splice(index, 1)

      ChromeStorage.set({backlog}).then(() => {
        store.dispatch({
          type: FETCH_COMICS
        })
      })
    }
  })
}

export default {
  get,
  addToBacklog,
  removeFromBacklog
}
