/* global describe jest it expect */

import axios from 'axios'
import Login from '../../app/api/Login'

jest.mock('axios')

describe('Login', () => {
  describe('ping function', () => {
    it('should exist', () => {
      expect(Login.isLoggedIn).toBeDefined()
    })

    it('should return true if logged in', () => {
      axios.get.mockReturnValueOnce(Promise.resolve({
        response: {
          status: 200
        }
      }))

      return expect(Login.isLoggedIn()).resolves.toEqual(true)
    })

    it('should return false if not logged in', () => {
      axios.get.mockReturnValueOnce(Promise.reject({
        response: {
          status: 401
        }
      }))

      return expect(Login.isLoggedIn()).resolves.toEqual(false)
    })

    it('should throw if login check fails', () => {
      axios.get.mockReturnValueOnce(Promise.reject({
        response: {
          status: 500
        }
      }))

      return expect(Login.isLoggedIn()).rejects.toEqual(new Error('Unknown error'))
    })
  })
})
