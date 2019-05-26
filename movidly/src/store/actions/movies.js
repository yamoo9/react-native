import { ADD_MOVIES } from './actionTypes'

// 무비 추가 액션
export const addMoviesAction = movies => {
  return { type: ADD_MOVIES, movies }
}
