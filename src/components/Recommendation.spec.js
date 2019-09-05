import React from 'react'
import { shallow, mount } from 'enzyme'
import RecommendationWrapped, { Recommendation } from './Recommendation'
import toJson from 'enzyme-to-json'
import {Provider} from 'react-redux'
import store from '../store'

 const mockMovie = 
  {
    "popularity": 18.559,
    "vote_count": 1960,
    "video": false,
    "poster_path": "\/76KMEI1ZNU9HEZ4pmHTwgwa0u6d.jpg",
    "id": 153518,
    "adult": false,
    "backdrop_path": "\/k15COpeexV5Ad0tuLjBW2jQFoOz.jpg",
    "original_language": "en",
    "original_title": "The Angry Birds Movie",
    "genre_ids": [
      12, 16, 35
    ],
    "title": "The Angry Birds Movie",
    "vote_average": 6,
    "overview": "An island populated entirely by happy, flightless birds or almost entirely. In t" +
        "his paradise, Red, a bird with a temper problem, speedy Chuck, and the volatile " +
        "Bomb have always been outsiders. But when the island is visited by mysterious gr" +
        "een piggies, it’s up to these unlikely outcasts to figure out what the pigs are " +
        "up to.",
    "release_date": "2016-05-20"
  }

describe('Recommendation component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Provider store={store}><RecommendationWrapped current={mockMovie}/></Provider>)
    // const mApp = mount(<Provider store={store}><RecommendationWrapped/></Provider>)
  //  const app = wrapper.find(RecommendationWrapped)
  //  console.log('App length:', mApp.state())
  //  mApp.setState({
  //     current: mockMovie
  //   });
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})