import React from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent';
import {Link} from 'react-router-dom'
import './Recommendation.css'

class Recommendation extends React.Component {
  state = {
    index: 0,
    current: []
  }
  componentDidMount() {
    const movies = this.props.movies;

    Promise.all(movies.map(item => {
      return request
        .get(`https://api.themoviedb.org/3/movie/${item.id}/recommendations?api_key=9f331ae5aeb7c6a0d55d497451cb6fca&language=en-US&page=1`)
        .then(res => {
          return res.body.results;
        })
    })).then(values => {
      var counts = {};
      values
        .flat()
        .forEach((movie) => {
          if (!counts[movie.id])
            counts[movie.id] = {
              times: 0
            };
          counts[movie.id].times = counts[movie.id].times + 1;
          counts[movie.id].movie = movie;
        });
      this.setState({
        current: Object
          .values(counts)
          .sort((a, b) => b.times - a.times)
      })
    })
  }

  onClick = (event) => {
    event.preventDefault();
    this.setState({
      index: this.state.index + 1
    })
  }
  render() {
    const movieRec = this.state.current.length
      ? this.state.current[this.state.index].movie
      : null;
    console.log('Movie:', movieRec)
    return (
      <div className='rec-wrapper'>
        <h2>We recommend you to watch</h2>
        {movieRec
          ? <div className='rec-movie'>
            <h4>{movieRec.title.slice(0, 50)}</h4>
            <div className='rec-movie-container'>
            <img
              src={`http://image.tmdb.org/t/p/w185/${movieRec.poster_path}`}
              alt='poster' />
            <p>{movieRec.overview.slice(0, 410)}</p>
          </div>
          </div>
          : null
          
        }
        <button className='rec-button'onClick={this.onClick}>Next</button>
        <Link className='link'to='/'>Go to main page</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { movies: state.movies }
}

export default connect(mapStateToProps, null)(Recommendation)