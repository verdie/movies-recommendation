import React from 'react'
import * as request from 'superagent'
import {selectMovies} from '../actions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

 class GenresItem extends React.Component{
  state={
    movies:[],
    selectedMovies:[]
  }
  componentDidMount(){
    const page = Math.floor(Math.random()*10)
    request
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=9f331ae5aeb7c6a0d55d497451cb6fca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${this.props.match.params.genreId}&page=${page}`)
      .then(response=> this.setState({movies:response.body.results}))
  }
  onMovieClick=(event,movie)=>{
    event.preventDefault();
    if(!this.state.selectedMovies.some(item=> item.id === movie.id)){
      this.setState({selectedMovies: this.state.selectedMovies.concat(movie)})
    }
  }

  onRecommendationClick=(event)=>{
    this.props.selectMovies(this.state.selectedMovies)
  }
  render(){
    console.log('state:', this.state.movies)
    console.log('selected:', this.state.selectedMovies)
    return (<div><h2>Please select movies that you like</h2>{this.state.movies.length
    ?this.state.movies.map(item=>{
      return <div key={item.id} onClick={(event)=>{this.onMovieClick(event,item)}}>
        <h4>{item.title}</h4>
        <img src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`} alt ='poster'/>
        <p>{item.overview}</p>
        </div>
    })
    :null}
    <Link to ='/recommendation' onClick={this.onRecommendationClick}>Show</Link>
    </div>)
  }
}

function mapStateToProps (state) {
  return { movies: state.movies }
}

const mapDispatchToProps = { selectMovies }

export default connect(mapStateToProps, mapDispatchToProps)(GenresItem)