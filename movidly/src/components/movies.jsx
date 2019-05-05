import React, { Component } from 'react'
import { getMovies } from '../services/movieService'
import { paginate } from '../utils/paginate'
import LikeButton from './common/LikeButton'
import Pagination from './common/Pagination'

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 3,
  }
  componentDidMount() {
    this.setState({
      movies: getMovies(),
    })
  }
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({
      movies,
    })
  }
  handleLike = movie => {
    const movies = this.state.movies.slice()
    const index = movies.indexOf(movie)
    movies[index].like = !movies[index].like
    this.setState({
      movies,
    })
  }
  handlePageChange = (page, e) => {
    e.preventDefault()
    this.setState({
      currentPage: page,
    })
  }
  render() {
    const { currentPage, pageSize, movies: allMovies } = this.state
    const { length: count } = this.state.movies
    const movies = paginate(allMovies, currentPage, pageSize)

    if (count === 0) {
      return (
        <p className="alert alert-warning" role="alert">
          데이터베이스에 영화 정보가 존재하지 않습니다.
        </p>
      )
    } else {
      return (
        <React.Fragment>
          <p className="alert alert-primary" role="alert">
            데이터베이스에 존재하는 영화 정보는 <b>{count}</b>개 입니다.
          </p>
          <table className="table">
            <caption className="sr-only">무비 대여/평점 표</caption>
            <thead>
              <tr>
                <th scope="col">이름</th>
                <th scope="col">장르</th>
                <th scope="col">재고</th>
                <th scope="col">평점</th>
                <th scope="col">좋아요</th>
                <th scope="col">삭제</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>
                    <img
                      className="img-thumbnail float-left"
                      src={movie.image}
                      style={{ maxWidth: 80, marginRight: 10 }}
                      alt=""
                    />
                    {movie.title}
                  </td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <LikeButton
                      liked={movie.like}
                      onToogleLike={e => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={e => this.handleDelete(movie)}
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
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </React.Fragment>
      )
    }
  }
}

export default Movies
