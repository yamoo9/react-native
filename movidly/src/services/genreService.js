/** ------------------------------------------------
 * ECMAScript 2015+
 * - ES6+ 문법을 사용해 API를 작성합니다.
 * ------------------------------------------------ */

/**
 * 장르(Genres)
 */
const genres = [
  { _id: '5b21ca3eeb7f6fbccd471818', name: '액션' },
  { _id: '5b21ca3eeb7f6fbccd471814', name: '코미디' },
  { _id: '5b21ca3eeb7f6fbccd471820', name: '스릴러' },
  { _id: '5b21ca3eeb7f6fbccd471825', name: '다큐멘터리' },
  { _id: '5b21ca3eeb7f6fbccd471831', name: '드라마' },
]

/**
 * getGenres()
 * - 모든 장르 데이터(배열)를 반환
 */
export const getGenres = () => genres.slice()

/**
 * getGenreByName(name)
 * - 전달된 name과 일치하는 장르(객체) 반환
 */
export const getGenreByName = name => genres.find(g => g.name === name)

/**
 * getGenreById(id)
 * - 전달된 id와 일치하는 장르(객체) 반환
 */
const getGenreById = id => genres.find(g => g._id === id)
