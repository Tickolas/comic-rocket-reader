import { UNREAD_COMICS } from '../constants/DisplayModes'
import { CHANGE_DISPLAY_MODE, LOGGED_IN, LOGIN_CHECK } from '../constants/ActionTypes'
import Login from '../api/Login'

export const initialState = {
  isLoggedIn: false,
  displayMode: UNREAD_COMICS
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CHECK: {
      Login.isLoggedIn()
      return state
    }
    case LOGGED_IN: {
      return {...state, isLoggedIn: action.payload.isLoggedIn}
    }
    case CHANGE_DISPLAY_MODE: {
      return {...state, displayMode: action.payload.displayMode}
    }
  }

  return state
}

export default AppReducer
