import React, { Component } from 'react'
import { getMovies } from '../services/movieService'
import { getGenres } from '../services/genreService'
import { paginate } from '../utils/paginate'
import LikeButton from './common/LikeButton'
import Pagination from './common/Pagination'
import ListGroup from './common/ListGroup'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 3,
  }
  componentDidMount() {
    const genres = [{ name: '모든 장르', _id: '*' }, ...getGenres()]
    this.setState({
      movies: getMovies(),
      genres,
      selectedGenre: genres[0],
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
  handleItemSelect = (genre, e) => {
    e.preventDefault()
    this.setState({
      currentPage: 1,
      selectedGenre: genre,
    })
  }

  render() {
    const { genres, selectedGenre, currentPage, pageSize, movies: allMovies } = this.state

    const { length: count } = this.state.movies

    const filteredMovies =
      selectedGenre && selectedGenre._id !== '*'
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies

    const movies = paginate(filteredMovies, currentPage, pageSize)

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleItemSelect}
          />
        </div>
        <div className="col">
          <p
            className={filteredMovies.length ? 'alert alert-primary' : 'alert alert-warning'}
            role="alert">
            데이터베이스에 존재하는 영화 정보는 <b>{filteredMovies.length}</b>개 입니다.
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
                    <LikeButton liked={movie.like} onToogleLike={e => this.handleLike(movie)} />
                  </td>
                  <td>
                    <button onClick={e => this.handleDelete(movie)} className="btn btn-dark btn-sm">
                      제거
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={filteredMovies.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    )
  }
}

export default Movies
