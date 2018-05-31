import { combineReducers } from 'redux'
import AppReducer, {initialState as appReducerInitialState} from './AppReducer'
import ComicsReducer, {initialState as comicsReducerInitialState} from './ComicReducer'

export const initialState = {appReducer: {...appReducerInitialState}, comicsReducer: {...comicsReducerInitialState}}
export default combineReducers({appReducer: AppReducer, comicsReducer: ComicsReducer})
