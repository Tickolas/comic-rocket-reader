import { UNREAD_COMICS } from '../constants/DisplayModes'
import { CHANGE_DISPLAY_MODE, COMICS_FETCHED, LOGGED_IN, LOGIN_CHECK } from '../constants/ActionTypes'
import Login from '../api/Login'

export const initialState = {
  isLoggedIn: false,
  isFullyLoaded: false,
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
  }

  return state
}

export default AppReducer
