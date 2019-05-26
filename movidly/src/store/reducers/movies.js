import { ADD_MOVIES } from '../actions/actionTypes'

const initState = []

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return [...state, ...action.movies]
    default:
      return state
  }
}
