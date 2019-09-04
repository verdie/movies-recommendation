import React from 'react';
import * as request from 'superagent'
import { Link } from 'react-router-dom'
import './GenresList.css'


class GenresList extends React.Component {
  constructor() {
    super()
    this.state = {
      gens: []
    };
  }
  componentDidMount() {
    request
      .get('https://api.themoviedb.org/3/genre/movie/list?api_key=9f331ae5aeb7c6a0d55d497451cb6fca&language=en-US')
      .then(response => {
        console.log(response.body.genres)
        this.setState({ gens: response.body.genres })
      })
  }
  render() {
    console.log('STATE', this.state)
    return (<div className='category-wrapper'><h2>Please select category that you like</h2>{this.state.gens.length
      ? this.state.gens.map(item => {
        console.log('ITEM', item)
        return <Link key={item.id} to={`/genre/${item.id}`}><p>{item.name}</p></Link>
      })
      : null
      }
      </div>
    )
  }
}

export default GenresList;
