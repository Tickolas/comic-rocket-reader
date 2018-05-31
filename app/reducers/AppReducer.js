import { UNREAD_COMICS } from '../constants/DisplayModes'
import { CHANGE_DISPLAY_MODE, LOGIN_CHECK } from '../constants/ActionTypes'

export const initialState = {
  isLoggedIn: false,
  displayMode: UNREAD_COMICS
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CHECK: {
      return state
    }
    case CHANGE_DISPLAY_MODE: {
      return {...state, displayMode: action.payload.displayMode}
    }
  }

  return state
}

export default AppReducer
