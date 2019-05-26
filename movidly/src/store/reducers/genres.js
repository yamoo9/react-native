import { ADD_GENRES, SELECT_GENRE } from '../actions/actionTypes'

const initState = {
  selectedGenre: null,
  data: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_GENRES:
      return { ...state, data: [...state.data, ...action.genres] }
    case SELECT_GENRE:
      return { ...state, selectedGenre: action.selectedGenre }
    default:
      return state
  }
}
