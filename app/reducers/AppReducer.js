import { UNREAD_COMICS } from '../constants/DisplayModes'
import { CHANGE_DISPLAY_MODE, CHANGE_SETTINGS, COMICS_FETCHED, LOGGED_IN, LOGIN_CHECK } from '../constants/ActionTypes'
import Login from '../api/Login'
import { BY_COMIC_NAME } from '../constants/SortModes'

export const initialState = {
  isLoggedIn: false,
  isFullyLoaded: false,
  settings: {
    sortMode: BY_COMIC_NAME,
    reverseSort: false
  },
  displayMode: UNREAD_COMICS
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CHECK: {
      Login.isLoggedIn()
      return state
    }
    case LOGGED_IN: {
      return {...state, isFullyLoaded: action.payload.isFullyLoaded, isLoggedIn: action.payload.isLoggedIn}
    }
    case COMICS_FETCHED: {
      return {...state, isFullyLoaded: true}
    }
    case CHANGE_DISPLAY_MODE: {
      return {...state, displayMode: action.payload.displayMode}
    }
    case CHANGE_SETTINGS: {
      return {...state, settings: {...state.settings, ...action.payload.settings}}
    }
  }

  return state
}

export default AppReducer
