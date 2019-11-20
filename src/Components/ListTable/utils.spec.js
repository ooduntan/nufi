import { getCurrentPageList } from './utils'

describe('getCurrentPageList suite', () => {
  it.each(['', 0, false, undefined, null])('Should be able to handle falsy values', (value) => {
    const result = getCurrentPageList(value)
    const expectedResult = []

    expect(result).toEqual(expectedResult)
  })
})