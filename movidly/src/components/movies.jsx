import React, { Component } from 'react'

// 스타일 컴포넌트
import styled from 'styled-components'

import { getMovies } from '../services/movieService'
// import { getGenres } from '../services/genreService'
import { paginate } from '../utils/paginate'

import ListGroup from './common/ListGroup'
import LikeButton from './common/LikeButton'
import Pagination from './common/Pagination'

// React Redux 커넥트
import { connect } from 'react-redux'
// 액션
import { addGenresAction, selectGenreAction } from '../store/actions/genres'

// connect()에 전달할 첫번째 인자
const mapStateToProps = ({ genres }) => ({
  genres: genres.data,
  selectedGenre: genres.selectedGenre,
})
// connect()에 전달할 두번째 인자
const mapDispatchToProps = dispatch => ({
  fetchGenres: genres => {
    dispatch(addGenresAction(genres))
  },
  selectGenre: genre => {
    dispatch(selectGenreAction(genre))
  },
})

// Poster 스타일 컴포넌트
const Poster = styled.img`
  max-width: 80px;
  height: auto;
  margin-right: 10px;
`

class Movies extends Component {
  state = {
    movies: [],
    // genres: [],
    // selectedGenre: null,
    currentPage: 1,
    pageSize: 4,
  }

  componentDidMount() {
    // const allGenre = { _id: '*', name: '모든 장르' }
    // const genres = [allGenre, ...getGenres()]

    const { getGenres } = require('../services/genreService')
    const genres = getGenres()
    const allGenre = { _id: '*', name: '모든 장르' }
    genres.unshift(allGenre)
    this.props.fetchGenres(genres)
    this.props.selectGenre(allGenre)

    this.setState({
      movies: getMovies(),
      // genres,
      // selectedGenre: allGenre,
    })
  }

  handleItemSelect = (genre, e) => {
    e.preventDefault()
    this.props.selectGenre(genre)
    this.setState({
      // selectedGenre: genre,
      currentPage: 1,
    })
  }

  handleRemove = id => {
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== id),
    })
  }

  handleToggleLike = movie => {
    const movies = this.state.movies.slice()
    const index = movies.indexOf(movie)
    movies[index].like = !movies[index].like
    this.setState({
      movies,
    })
  }

  handlePageChange = (page, e) => {
    this.setState({
      currentPage: page,
    })
    e.preventDefault()
  }

  render() {
    const { movies: allMovies, pageSize, currentPage } = this.state
    const { genres, selectedGenre } = this.props

    const filteredMovies =
      selectedGenre && selectedGenre._id !== '*'
        ? allMovies.filter(m => m.genre.name === selectedGenre.name)
        : allMovies
    const movies = paginate(filteredMovies, currentPage, pageSize)
    const count = filteredMovies.length

    if (count === 0) {
      return (
        <div className="alert alert-danger" role="alert">
          데이터베이스에 영화정보가 {count}개 입니다.
        </div>
      )
    } else {
      return (
        <div className="row">
          <div className="col-lg col-lg-3">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleItemSelect}
              idProp="_id"
            />
          </div>
          <div className="col">
            <div className="alert alert-primary" role="alert">
              데이터베이스에 영화 정보가 {count}개 입니다.
            </div>
            <table className="table">
              <caption className="sr-only">무비 대여/평점 표</caption>
              <colgroup>
                <col width="40%" />
                <col width="15%" />
                <col width="15%" />
                <col width="7%" />
                <col width="7%" />
                <col width="16%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">이름</th>
                  <th scope="col">장르</th>
                  <th scope="col">재고</th>
                  <th scope="col">평점</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {movies.map(movie => (
                  <tr key={movie._id}>
                    <td>
                      <Poster
                        className="img-thunbnail float-left"
                        src={movie.image}
                        width="80"
                        height="113"
                        alt=""
                      />
                      <a href={movie.link} target="_blank" rel="noopener noreferrer">
                        {movie.title}
                      </a>
                    </td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <LikeButton
                        liked={movie.like}
                        onToggle={() => this.handleToggleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleRemove(movie._id)}
                        type="button"
                        className="btn btn-dark btn-sm">
                        제거
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      )
    }
  }
}

const connectedMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)

export default connectedMovies
