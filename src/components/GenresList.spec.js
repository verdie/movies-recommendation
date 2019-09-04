import React from 'react'
import { shallow } from 'enzyme'
import GenresList from './GenresList'
import toJson from 'enzyme-to-json'
import recomFunc from './helpers/recomFunc.js';
const mockGenres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

describe('GenresList component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<GenresList />)
    wrapper.setState({
      gens: mockGenres
    });

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const mock = [[{id: 1}, {id: 2}], [{id: 2}, {id: 3}]]
    const result = recomFunc(mock);
    expect(result[0].times).toBe(2)
    expect(result[0].movie.id).toBe(2)
    expect(result[1].times).toBe(1)
    expect(result[1].movie.id).toBe(1)
    expect(result[2].times).toBe(1)
    expect(result[2].movie.id).toBe(3)
  })
})
