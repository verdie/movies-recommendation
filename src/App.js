import React from 'react';
import {Route} from 'react-router-dom'
import GenresList from './components/GenresList';
import GenresItem from './components/GenresItem'
import Recommendation from './components/Recommendation'

class App extends React.Component {
  render() {
    return (
      <main>
        <Route path='/' exact component={GenresList}/>
        <Route path='/genre/:genreId' exact component={GenresItem}/>
        <Route path='/recommendation' exact component={Recommendation}/>
      </main>
    )
  }
}

export default App;
