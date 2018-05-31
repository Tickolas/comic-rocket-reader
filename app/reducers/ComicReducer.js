import { COMICS_FETCHED, FETCH_COMICS } from '../constants/ActionTypes'

const initialState = []

const ComicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMICS: {
      return state
    }
    case COMICS_FETCHED: {
      return state
    }
  }

  return state
}

export default ComicReducer
