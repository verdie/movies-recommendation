import React from 'react'
import * as request from 'superagent'
import {selectMovies} from '../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './GenresItem.css'

class GenresItem extends React.Component {
  state = {
    movies: [],
    selectedMovies: [],
    active: false
  }
  componentDidMount() {
    const page = Math.floor(Math.random() * 10)
    request
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=9f331ae5aeb7c6a0d55d497451cb6fca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${this.props.match.params.genreId}&page=${page}`)
      .then(response => this.setState({movies: response.body.results}))
  }
  onMovieClick = (event, movie) => {
    event.preventDefault();
    if (!this.state.selectedMovies.some(item => item.id === movie.id)) {
      this.setState({
        selectedMovies: this
          .state
          .selectedMovies
          .concat(movie),
        active: true
      })
    }
  }

  onRecommendationClick = (event) => {
    this
      .props
      .selectMovies(this.state.selectedMovies)
  }
  render() {

    return (
      <div className='movies-wrapper'>
        <h2>Please select movies that you like</h2>
        {this.state.movies.length
          ? this
            .state
            .movies
            .map(item => {
              const isActive = this
                .state
                .selectedMovies
                .find(sel => item.id === sel.id)
              return <div
                className={isActive
                ? 'active'
                : 'movie'}
                key={item.id}
                onClick={(event) => {
                this.onMovieClick(event, item)
              }}>
                <h4>{item
                    .title
                    .slice(0, 50)}</h4>
                <div className='movie-container'>
                  <img src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} alt='poster'/>
                  <p>{item
                      .overview
                      .slice(0, 410)}</p>
                </div>
              </div>
            })
          : null}

        <Link
          to='/recommendation'
          className='show'
          onClick={this.onRecommendationClick}>Show Recommendation</Link>
        <Link className='link' to='/'>Go to main page</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {movies: state.movies}
}

const mapDispatchToProps = {
  selectMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresItem)