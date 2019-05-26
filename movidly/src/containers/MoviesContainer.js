import { connect } from 'react-redux'

// 액션
import { addGenresAction, selectGenreAction } from '../store/actions/genres'
import { addMoviesAction } from '../store/actions/movies'

// 표현 컴포넌트
import Movies from '../components/Movies'

// connect()에 전달할 첫번째 인자
const mapStateToProps = ({ genres, movies }) => ({
  movies,
  genres: genres.data,
  selectedGenre: genres.selectedGenre,
})

// connect()에 전달할 두번째 인자
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

// 컨테이너 컴포넌트
const connectedMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)

export default connectedMovies
