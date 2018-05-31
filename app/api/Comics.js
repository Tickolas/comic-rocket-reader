import http from 'axios'
import { FETCH_COMICS } from './Paths'
import store from '../store/Store'
import { COMICS_FETCHED } from '../constants/ActionTypes'

function get () {
  return http.get(FETCH_COMICS).then((result) => {
    store.dispatch({
      type: COMICS_FETCHED,
      payload: {
        comics: result.data
      }
    })
  }).catch(() => Promise.resolve([]))
}

export default {
  get
}
