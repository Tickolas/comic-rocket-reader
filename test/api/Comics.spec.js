/* global describe jest it expect */

import axios from 'axios'
import Comics from '../../app/api/Comics'
import { ComicsDataMock, ComicsMock } from '../mock/Comics.mock'

jest.mock('axios')

describe('Comics API', () => {
  describe('function to fetch comics', () => {
    it('should exist', () => {
      expect(Comics.get).toBeDefined()
    })

    it('should fetch comics from the API', () => {
      axios.get.mockReturnValueOnce(Promise.resolve(ComicsDataMock))

      return Comics.get().then((comics) => {
        expect(comics[0].name).toEqual('A Mad Tea-Party')
        expect(comics).toEqual(ComicsMock)
      })
    })

    it('should return an empty list when it fails to fetch comics from the API', () => {
      axios.get.mockReturnValueOnce(Promise.reject())

      return Comics.get().then((comics) => {
        expect(comics).toEqual([])
      })
    })
  })
})
