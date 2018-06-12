/* global describe jest it expect beforeEach */

import ChromeStorage from '../../app/api/ChromeStorage'

const expectedData = {
  comicRocketReader: {
    oldThing: 'oldData'
  }
}

describe('Comics API', () => {
  beforeEach(() => {
    window.chrome = {
      storage: {
        local: {
          get: jest.fn((title, callback) => {
            callback(expectedData)
          }),
          set: jest.fn()
        }
      }
    }
  })

  describe('function to get state', () => {
    it('should exist', () => {
      expect(ChromeStorage.get).toBeDefined()
    })

    it('should fetch state from storage', () => {
      expect.assertions(2)

      return ChromeStorage.get().then(data => {
        expect(data).toEqual(expectedData)
        expect(window.chrome.storage.local.get).toHaveBeenCalled()
      })
    })
  })

  describe('function to save state', () => {
    it('should exist', () => {
      expect(ChromeStorage.set).toBeDefined()
    })

    it('should save state with new object to storage', () => {
      expect.assertions(1)

      const newData = {newThing: 'newData'}

      return ChromeStorage.set(newData).then(() => {
        expect(window.chrome.storage.local.set).toHaveBeenCalledWith({comicRocketReader: {
          oldThing: expectedData.comicRocketReader.oldThing,
          newThing: newData.newThing
        }})
      })
    })

    it('should overwrite old state with new object to storage', () => {
      expect.assertions(1)

      const newData = {oldThing: 'newData'}

      return ChromeStorage.set(newData).then(() => {
        expect(window.chrome.storage.local.set).toHaveBeenCalledWith({comicRocketReader: {
          oldThing: newData.oldThing
        }})
      })
    })
  })
})
