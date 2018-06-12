import store from '../../app/store/Store'
import { FETCH_COMICS, LOGGED_IN } from '../constants/ActionTypes'
import ChromeStorage from './ChromeStorage'

function isLoggedIn () {
  ChromeStorage.get().then(data => {
    if (data.comicRocketReader.isLoggedIn) {
      store.dispatch({
        type: LOGGED_IN,
        payload: { isFullyLoaded: false, isLoggedIn: true }
      })
      store.dispatch({
        type: FETCH_COMICS
      })
    } else {
      store.dispatch({
        type: LOGGED_IN,
        payload: { isFullyLoaded: true, isLoggedIn: false }
      })
    }
  })
}

export default {
  isLoggedIn
}
