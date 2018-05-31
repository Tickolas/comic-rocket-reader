import http from 'axios'
import paths from './Paths'
import store from '../../app/store/Store'
import { FETCH_COMICS, LOGGED_IN } from '../constants/ActionTypes'

function isLoggedIn () {
  http.get(paths.LOGIN_CHECK).then(() => {
    store.dispatch({
      type: LOGGED_IN,
      payload: { isLoggedIn: true }
    })
  }).then(() => {
    store.dispatch({
      type: FETCH_COMICS
    })
  }).catch((error) => {
    if (error.response.status === 401) {
      store.dispatch({
        type: LOGGED_IN,
        payload: { isLoggedIn: false }
      })
    } else {
      throw new Error('Unknown error')
    }
  })
}

export default {
  isLoggedIn
}
