# genreService.js

- 모듈 내보내기(export)
- 화살표(arrow) 함수
- 상수(const)
- 전개(spread) 문법
- Array.prototype.find

## genres

```js
const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "액션" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "코미디" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "스릴러" },
  { _id: "5b21ca3eeb7f6fbccd471825", name: "다큐멘터리" },
  { _id: "5b21ca3eeb7f6fbccd471831", name: "드라마" },
];
```

## getGenres()

```js
/**
 * getGenres()
 * - 모든 장르 데이터(배열)를 반환
 */
export const getGenres = () => [...genres]

// export function getGenres() {
//   return genres.slice()
// }
```

## getGenreByName()

```js
/**
 * getGenreByName(name)
 * - 전달된 name과 일치하는 장르(객체) 반환
 */
export const getGenreByName = name =>
  getGenres().find(genre => genre.name === name)
```

## getGenreById()

```js
/**
 * getGenreById(id)
 * - 전달된 id와 일치하는 장르(객체) 반환
 */
export const getGenreById = id =>
  getGenres().find(genre => genre._id === id)
```

# movieService.js

- 모듈 불러오기(import)
- 모듈 내보내기(export)
- 구조 분해 할당(Destructuring)
- 상수(const)
- for...of
- Object.entries
- Array.prototype.slice
- Array.prototype.find
- Array.prototype.push
- Array.prototype.splice
- Array.prototype.indexOf

## genreService > getGenreByName

```js
/**
 * genreService 모듈에서 getGenreByName 멤버 추출
 */
import { getGenreByName } from './genreService'
```

## movies

```js
const movies = [ ... ]
```

## getMovies()

```js
/**
 * getMovies()
 * - 모든 무비 데이터(배열 복제) 반환
 */
export const getMovies = () => movies.slice()
```
```js
/**
 * getMovie(id)
 * - 전달 받은 id와 일치하는 무비 데이터(객체) 반환
 */
export const getMovie = id =>
  getMovies().find(movie => movie._id === id)
```

```js
/**
 * saveMovie(movie)
 * - 전달된 무비 데이터(객체)를 무비 데이터베이스(배열)에 저장 후, 새로운 무비(객체) 반환
 * --------------------------------------------------------------------
 * 새로운 무비 객체 정보
 * - _id (없을 경우 Date.now() 이용)
 * - title
 * - subtitle
 * - link
 * - image
 * - pubDate
 * - genre(genreServie.getGenreByName 이용)
 * - numberInStock
 * - dailyRentalRate
 *
 * 사용 예시
   saveMovie({
     title: "검찰측의 죄인",
     subtitle: "検察側の罪人, Kensatsu gawa no zainin",
     link: "https://movie.naver.com/movie/bi/mi/basic.nhn?code=164103",
     image: "https://movie-phinf.pstatic.net/20190214_183/1550124128940CthGD_JPEG/movie_image.jpg",
     pubDate: "2018",
     genreName: "미스터리",
     numberInStock: 2,
     dailyRentalRate: 8.7
   })
 */
export const saveMovie = movie => {
  if(!movie) { return null }
  const movieInDb = getMovies().find(m => m._id === movie._id) || {}
  for(let [key, value] of Object.entries(m)) {
    if (key === 'genreName') {
      movieInDb.genre = getGenreByName(value)
      continue
    }
    movieInDb[key] = value
  }
  if (!movie._id) { movieInDb._id = String(Date.now()) }
  movies.push(movieInDb)
  return movieInDb
}
```

```js
/**
 * deleteMovie(id)
 * - 전달 받은 id와 일치하는 무비 데이터(객체) 삭제 후, 삭제된 무비(객체) 반환
 */
export const deleteMovie = id => {
  const movieInDb = getMovie(id)
  const index = movies.indexOf(movieInDb)
  movies.splice(index, 1)
  return movieInDb
}

```
