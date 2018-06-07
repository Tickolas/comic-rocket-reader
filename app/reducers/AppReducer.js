import { UNREAD_COMICS } from '../constants/DisplayModes'
import {
  CHANGE_DISPLAY_MODE,
  CHANGE_SETTINGS,
  COMICS_FETCHED,
  LOGGED_IN,
  LOGIN_CHECK,
  SETTINGS_SYNCED,
  SYNC_SETTINGS
} from '../constants/ActionTypes'
import Login from '../api/Login'
import { BY_COMIC_NAME } from '../constants/SortModes'
import ChromeUtils from '../utils/ChromeUtils'

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
    case SYNC_SETTINGS: {
      ChromeUtils.getSettings()
      return state
    }
    case SETTINGS_SYNCED: {
      return {...state, settings: action.payload.settings || initialState.settings}
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
      ChromeUtils.saveSettings({...state.settings, ...action.payload.settings})
      return {...state, settings: {...state.settings, ...action.payload.settings}}
    }
  }

  return state
}

export default AppReducer
