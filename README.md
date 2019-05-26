# React Native 러닝 가이드

JavaScript + React → Native App(iOS, Android) 😍

### 🤐 학습 자료

React + Styled Components 애플리케이션 학습 자료를 다운로드 받아 실습을 진행합니다.

➪ [학습 자료](https://github.com/yamoo9/react-native/archive/redux-01-ex.zip) 다운로드

<br>

## Container 컴포넌트

React Redux는 presentational 컴포넌트와 container 컴포넌트를 분리하는 아이디어를 채택했습니다.

|                      | Presentational 컴포넌트           | Container 컴포넌트                                |
| -------------------- | --------------------------------- | ------------------------------------------------- |
| 목적                 | 어떻게 보여질 지 (마크업, 스타일) | 어떻게 동작할 지 (데이터 불러오기, 상태 변경하기) |
| Redux와 연관됨       | 아니오                            | 예                                                |
| 데이터를 읽기 위해   | props에서 데이터를 읽음           | Redux 상태를 구독                                 |
| 데이터를 바꾸기 위해 | props에서 콜백을 호출             | Redux 액션을 보냄                                 |

<br>

### 상태 구독, 액션 디스패치 로직 분리

앞서 작성했던 Movies 컴포넌트는 Presentational 컴포넌트입니다. Container 컴포넌트는 사용하지 않았습니다.
React Redux의 아이디어에 따라 Presentational 컴포넌트와 Container 컴포넌트를 분리 관리해보도록 합니다.
Movies 컴포넌트를 래핑하는 MoviesContainer 컴포넌트를 만든 후, Redux 스토어에 상태 구독, 액션을 보내는 로직을 수행하는 코드를
Movies 컴포넌트에서 가져와 아래와 같이 구성합니다.

```jsx
// src/containers/MoviesContainer.jsx

import { connect } from 'react-redux'
import { addGenresAction, selectGenreAction } from '../store/actions/genres'

// Presentational 컴포넌트
import Movies from '../components/Movies'

const mapStateToProps = ({ genres }) => ({
  genres: genres.data,
  selectedGenre: genres.selectedGenre,
})

const mapDispatchToProps = dispatch => ({
  fetchGenres: genres => {
    dispatch(addGenresAction(genres))
  },
  selectGenre: genre => {
    dispatch(selectGenreAction(genre))
  },
})

// Container 컴포넌트
const connectedMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)

// Container 컴포넌트 내보내기
export default connectedMovies
```

Movies 컴포넌트는 Container 컴폰넌트 로직을 제거하고,
Presentational 컴포넌트로서의 코드만으로 구성합니다.

```jsx
// src/components/Movies.jsx

export default class Movies extends Component {
  // ...

  componentDidMount() {
    // 데이터 패치
    this.fetchData()

    this.setState({
      movies: getMovies(),
    })
  }
  // 데이터 패치 메서드
  fetchData() {
    // 장르 데이터
    const genres = getGenres()
    const allGenre = { _id: '*', name: '모든 장르' }
    genres.unshift(allGenre)
    // Container 컴포넌트에 의해 전달된 props
    // 액션 보냄
    this.props.fetchGenres(genres)
    this.props.selectGenre(allGenre)
  }

  // ...
}
```

App 컴포넌트에서 Movies 컴포넌트 대신 MoviesContainer 컴포넌트를 불러와 적용합니다.

```jsx
// src/App.jsx

import MoviesContainer from './containers/MoviesContainer'

function App() {
  return (
    <div className="App">
      <div className="container" role="main">
        <Navbar />
        <MoviesContainer />
      </div>
    </div>
  )
}
```

### 프로젝트 디렉토리 구조

Container, Presentational 컴포넌트를 분리한 후 프로젝트 디렉토리 구조는 다음과 같이 정리됩니다.

```sh
src
├── index.js
├── App.jsx
├── store/
│   ├── index.js
│   ├── actions/
│   │   ├── actionTypes.js
│   │   └── genres.js
│   └── reducers/
│       ├── genres.js
│       └── index.js
├── containers/ # Contaier 컴포넌트 디렉토리 관리
│   └── MoviesContainer.js # Movies 컨테이너 컴포넌트 (스토어 상태 구독, 액션 보냄 처리)
├── components/
│   ├── Movies.jsx # Presentational 컴포넌트 (UI 렌더링)
│   ├── Navbar.jsx
│   └── common/
│       ├── LikeButton.jsx
│       ├── ListGroup.jsx
│       └── Pagination.jsx
├── services/
│   ├── genreService.js
│   └── movieService.js
└── utils/
    └── paginate.js
```
