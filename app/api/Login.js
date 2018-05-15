import http from 'axios'
import paths from './Paths'

function isLoggedIn () {
  return http.get(paths.LOGIN_CHECK).then(() => {
    return true
  }).catch((error) => {
    if (error.response.status === 401) {
      return Promise.resolve(false)
    } else {
      throw new Error('Unknown error')
    }
  })
}

module.exports = {
  isLoggedIn
}
