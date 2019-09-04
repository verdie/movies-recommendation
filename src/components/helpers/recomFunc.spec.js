import recomFunc from './recomFunc.js';

describe('recomFunc', () => {
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