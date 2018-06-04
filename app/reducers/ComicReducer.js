import { ADD_COMIC_TO_BACKLOG, COMICS_FETCHED, FETCH_COMICS, REMOVE_COMIC_FROM_BACKLOG } from '../constants/ActionTypes'
import Comics from '../api/Comics'
import { sortReadUnreadComics } from '../utils/ComicsUtil'

const initialState = {backlog: []}

const ComicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMICS: {
      Comics.get()
      return state
    }
    case COMICS_FETCHED: {
      return {...state, backlog: action.payload.backlog, comics: sortReadUnreadComics(action.payload.comics, action.payload.backlog)}
    }
    case ADD_COMIC_TO_BACKLOG: {
      Comics.addToBacklog(action.payload.comic)
      return state
    }
    case REMOVE_COMIC_FROM_BACKLOG: {
      Comics.removeFromBacklog(action.payload.comic)
      return state
    }
  }

  return state
}

export default ComicReducer
