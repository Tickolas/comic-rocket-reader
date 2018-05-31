import { COMICS_FETCHED, FETCH_COMICS } from '../constants/ActionTypes'
import Comics from '../api/Comics'
import { sortReadUnreadComics } from '../utils/ComicsUtil'

const initialState = {}

const ComicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMICS: {
      Comics.get()
      return state
    }
    case COMICS_FETCHED: {
      return {...state, comics: sortReadUnreadComics(action.payload.comics)}
    }
  }

  return state
}

export default ComicReducer
