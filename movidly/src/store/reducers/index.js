import { combineReducers } from 'redux'
import movies from './movies'
import genres from './genres'

const rootReducer = combineReducers({
  movies,
  genres,
})

export default rootReducer
