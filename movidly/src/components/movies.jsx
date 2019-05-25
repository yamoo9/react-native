import React, { Component, Fragment } from 'react'
import { paginate } from '../utils/paginate'

import { getMovies } from '../services/movieService'
import { getGenres } from '../services/genreService'

import LikeButton from './common/LikeButton'
import Pagination from './common/Pagination'
import ListGroup from './common/ListGroup'

const styles = {
  poster: {
    maxWidth: 80,
    height: 'auto',
    marginRight: 10,
  },
}

export default class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: null,
    currentPage: 1,
    pageSize: 4,
  }

  componentDidMount() {
    const allGenre = { _id: '*', name: '모든 장르' }
    const genres = [allGenre, ...getGenres()]
    this.setState({
      movies: getMovies(),
      genres,
      selectedGenre: allGenre,
    })
  }

  handleItemSelect = (genre, e) => {
    e.preventDefault()
    this.setState({
      selectedGenre: genre,
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
    const { genres, selectedGenre, movies: allMovies, pageSize, currentPage } = this.state
    // const { length: count } = allMovies

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
                      <img
                        className="img-thunbnail float-left"
                        src={movie.image}
                        style={styles.poster}
                        width="80"
                        height="113"
                        alt=""
                      />
                      <a href={movie.link} target="_blank" rel="noreferrer">
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
