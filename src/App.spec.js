import React from 'react'
import { render } from 'enzyme'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import toJson from 'enzyme-to-json'

describe('App component', () => {
it('renders correctly', () => {
  const wrapper = render(<BrowserRouter><App /></BrowserRouter>);
  expect(toJson(wrapper)).toMatchSnapshot();
})
})
