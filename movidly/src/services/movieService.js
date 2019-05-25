/** ------------------------------------------------
 * ECMAScript 2015+
 * - ES6+ 문법을 사용해 API를 작성합니다.
 * ------------------------------------------------ */

/**
 * genreService 모듈에서 getGenreByName 멤버 추출
 */
import { getGenreByName } from './genreService'

/**
 * 무비(Movies)
 */
const movies = [
  {
    _id: '5b21ca3eeb7f6fbccd471815',
    title: '어벤져스: 엔드게임',
    subtitle: 'Avengers: Endgame',
    link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=136900',
    image: 'https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg',
    pubDate: '2019',
    genre: { _id: '5b21ca3eeb7f6fbccd471818', name: '액션' },
    numberInStock: 6,
    dailyRentalRate: 9.43,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471816',
    title: '뷰티플 마인드',
    subtitle: 'Listen to Your Heart. The Beautiful Mind',
    link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=177543',
    image: 'https://movie-phinf.pstatic.net/20190401_109/1554082549248W2iyl_JPEG/movie_image.jpg',
    pubDate: '2019',
    genre: { _id: '5b21ca3eeb7f6fbccd471825', name: '다큐멘터리' },
    numberInStock: 5,
    dailyRentalRate: 9.83,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471817',
    title: '고양이 여행 리포트',
    subtitle: '旅猫リポート, The Travelling Cat Chronicles',
    link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=174321',
    image: 'https://movie-phinf.pstatic.net/20190419_4/15556641782554xyEQ_JPEG/movie_image.jpg',
    pubDate: '2019',
    genre: { _id: '5b21ca3eeb7f6fbccd471831', name: '드라마' },
    numberInStock: 8,
    dailyRentalRate: 9.06,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471819',
    title: '내부자들: 디 오리지널',
    subtitle: 'Inside Men: The Original',
    link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=147001',
    image: 'https://movie-phinf.pstatic.net/20151231_70/14515598150769qgj2_JPEG/movie_image.jpg',
    pubDate: '2015',
    genre: { _id: '5b21ca3eeb7f6fbccd471831', name: '드라마' },
    numberInStock: 7,
    dailyRentalRate: 9.09,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181a',
    title: '싱글라이더',
    subtitle: 'A single rider',
    link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=146459',
    image: 'https://movie-phinf.pstatic.net/20170223_77/1487828550952mDECT_JPEG/movie_image.jpg',
    pubDate: '2017',
    genre: { _id: '5b21ca3eeb7f6fbccd471831', name: '드라마' },
    numberInStock: 4,
    dailyRentalRate: 8.01,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181b',
    title: '그 해 여름',
    subtitle: 'Once In A Summer',
    link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=46985',
    image: 'https://movie-phinf.pstatic.net/20111223_121/1324570748255LDMxf_JPEG/movie_image.jpg',
    pubDate: '2006',
    genre: { _id: '5b21ca3eeb7f6fbccd471814', name: '코메디' },
    numberInStock: 1,
    dailyRentalRate: 8.79,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181e',
    title: '태양은 가득히',
    subtitle: 'Plein Soleil, Purple Noon',
    link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=10514',
    image: 'https://movie-phinf.pstatic.net/20111221_98/13244519127394BWFv_JPEG/movie_image.jpg',
    pubDate: '1960',
    genre: { _id: '5b21ca3eeb7f6fbccd471820', name: '스릴러' },
    numberInStock: 0,
    dailyRentalRate: 8.67,
  },
  {
    _id: '5b21ca3eeb7f6fbccd47181f',
    title: '우리들',
    subtitle: 'THE WORLD OF US',
    link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=146504',
    image: 'https://movie-phinf.pstatic.net/20160519_125/1463633078640zLLTy_JPEG/movie_image.jpg',
    pubDate: '2015',
    genre: { _id: '5b21ca3eeb7f6fbccd471831', name: '드라마' },
    numberInStock: 4,
    dailyRentalRate: 9.21,
  },
  {
    _id: '5b21ca3eeb7f6fbccd471821',
    title: '다시, 봄',
    subtitle: 'Spring, Again',
    link: 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=177511',
    image: 'https://movie-phinf.pstatic.net/20190328_260/1553739672852J9R3l_JPEG/movie_image.jpg',
    pubDate: '2018',
    genre: { _id: '5b21ca3eeb7f6fbccd471831', name: '드라마' },
    numberInStock: 7,
    dailyRentalRate: 8.63,
  },
]

/**
 * getMovies()
 * - 모든 무비 데이터(배열 복제) 반환
 */
export const getMovies = () => movies.slice()

/**
 * getMovie(id)
 * - 전달 받은 id와 일치하는 무비 데이터(객체) 반환
 */
export const getMovie = id => getMovies().find(m => m._id === id)

/**
 * saveMovie(movie)
 * - 전달된 무비 데이터(객체)를 무비 데이터베이스(배열)에 저장 후, 새로운 무비(객체) 반환
 * --------------------------------------------------------------------
 * 새로운 무비 객체 정보
 * - _id (없을 경우 Date.now() 이용)
 * - title
 * - genre(genreServie.getGenreByName 이용)
 * - numberInStock
 * - dailyRentalRate
 */
export const saveMovie = movie => {
  if (!movie) {
    return null
  }
  const movieInDb = getMovies().find(m => m._id === movie._id) || {}
  for (let [key, value] of Object.entries(movie)) {
    if (key === 'genreName') {
      movieInDb.genre = getGenreByName(value)
      continue
    }
    movieInDb[key] = value
  }
  if (!movieInDb._id) {
    movieInDb._id = String(Date.now())
  }
  movies.push(movieInDb)
  return movieInDb
}

/**
 * deleteMovie(id)
 * - 전달 받은 id와 일치하는 무비 데이터(객체) 삭제 후, 삭제된 무비(객체) 반환
 */
export const deleteMovie = id => {
  const movieInDb = getMovies().find(m => m._id === String(id))
  const index = movies.indexOf(movieInDb)
  movies.splice(index, 1)
  return movieInDb
}
