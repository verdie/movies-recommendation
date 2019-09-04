export const SELECT_MOVIES ='SELECT_MOVIES'
export function selectMovies (payload) {
  return {
    type: SELECT_MOVIES,
    payload
  }
}