import {SELECT_MOVIES} from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case SELECT_MOVIES:
      return action.payload
    default:
      return state
  }
}