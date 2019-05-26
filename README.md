# React Native 러닝 가이드

JavaScript + React → Native App(iOS, Android) 😍

### 🤐 학습 자료

React + Styled Components 애플리케이션 학습 자료를 다운로드 받아 실습을 진행합니다.

➪ [학습 자료](https://github.com/yamoo9/react-native/archive/redux-02-ex.zip) 다운로드

<br>

## movies 상태 → 스토어 관리

### 액션 타입

actionType.js 파일에 무비(배열) 정보를 추가하는 '무비 추가' 액션 타입을 설정합니다.

```js
export const ADD_MOVIES = 'ADD_MOVIES'
```

### 액션

actions/movies.js 파일을 만든 후, '무비 추가' 액션 크리에이터를 작성합니다.

```js
import { ADD_MOVIES } from './actionTypes'

// 무비 추가 액션
export const addMoviesAction = movies => {
  return { type: ADD_MOVIES, movies }
}
```

### 리듀서

'무비 추가' 액션이 디스패치 되면 처리할 리듀서(함수)를 reducers/movies.js 파일에 작성합니다.

```js
import { ADD_MOVIES } from '../actions/actionTypes'

// 초기 상태
const initState = []

export default (state = initState, action) => {
  switch (action.type) {
    // '무비 추가'
    case ADD_MOVIES:
      return [...state, ...action.movies]

    default:
      return state
  }
}
```

### 루트 리듀서

reducers/index.js 파일을 열어 movies 리듀서를 불러와 rootReducer에 설정합니다.

```js
import movies from './movies'

const rootReducer = combineReducers({
  movies,
  genres,
})

export default rootReducer
```

### MoviesContainer 컴포넌트

Container 컴포넌트 파일은 상태 구독 및 액션 디스패치를 관리합니다.
movies 상태를 mapStateToProps에 추가하고,
mapDispatchToProps에 addMoviesAction 액션 크리에이터를 디스패치 하는 fetchMovies 메서드를 추가합니다.

```jsx
// 액션
import { addMoviesAction } from '../store/actions/movies'

// ...

const mapStateToProps = ({ genres, movies }) => ({
  movies,
  genres: genres.data,
  selectedGenre: genres.selectedGenre,
})

const mapDispatchToProps = dispatch => ({
  fetchMovies: movies => {
    dispatch(addMoviesAction(movies))
  },
  fetchGenres: genres => {
    dispatch(addGenresAction(genres))
  },
  selectGenre: genre => {
    dispatch(selectGenreAction(genre))
  },
})
```

### Movies 컴포넌트

Movies 컴폰너트는 movies 상태를 스토어에서 관리하게 됨에 따라,
더 이상 movies 상태를 가지고 있을 이유가 없습니다. movies 상태와 관련된 것을 찾아
코드를 다음과 같이 변경합니다. (주석 참고)

```jsx
xport default class Movies extends Component {
  // movies 상태 제거
  state = {
    currentPage: 1,
    pageSize: 4,
  }

  // movies 상태 설정 this.setState() 제거
  componentDidMount() {
    this.fetchData()
  }

  // 데이터 패치
  fetchData() {
    // fetchMovies 구조 분해 할당
    const { fetchMovies, fetchGenres, selectGenre } = this.props

    // 무비
    const movies = getMovies()
    fetchMovies(movies) // 액션 디스패치

    // 장르
    const genres = getGenres()
    const allGenre = { _id: '*', name: '모든 장르' }
    genres.unshift(allGenre)
    fetchGenres(genres) // 액션 디스패치
    selectGenre(allGenre) // 액션 디스패치
  }

  // 컴포넌트 렌더
  render() {
    const { pageSize, currentPage } = this.state

    // movies 구조 분해 할당 후, allMovies로 이름 변경
    const { movies: allMovies, genres, selectedGenre } = this.props

    // ...
  }
}
```

<br>

## 정리

Redux, React Redux 라이브러리를 사용해 애플리케이션 상태를 관리하는 방법을 다뤄봤습니다.
Movies 컴포넌트에서 `movies`, `genres`, `selectGenre` 상태를 분리해 스토어의
리듀서, 액션 등으로 구분해 관리하고, MoviesContainer 컴포넌트를 사용해 상태 구독 및
액션 디스패치 로직을 Movies Presentional 컴포넌트에서 분리 관리 하는 방법을 학습했습니다.
