import createStore from './configureStore'
import { initialState } from '../../app/reducers/index'

const store = createStore(initialState)

export default store
