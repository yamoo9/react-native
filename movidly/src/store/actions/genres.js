import { ADD_GENRES, SELECT_GENRE } from './actionTypes'

// 장르(배열) 추가 액션
export const addGenresAction = genres => {
  return { type: ADD_GENRES, genres }
}

// 장르 선택 액션
export const selectGenreAction = selectedGenre => {
  return { type: SELECT_GENRE, selectedGenre }
}
