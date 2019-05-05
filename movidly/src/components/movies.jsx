import React, { Component } from 'react'
import { getMovies } from '../services/movieService'

class Movies extends Component {
  state = {
    movies: [],
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
  render() {
    return (
      <table className="table">
        <caption className="sr-only">무비 대여/평점 표</caption>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">장르</th>
            <th scope="col">재고</th>
            <th scope="col">평점</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
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
    )
  }
}

export default Movies
