import http from 'axios'
import { FETCH_COMICS } from './Paths'

function get () {
  return http.get(FETCH_COMICS).then((comics) => {
    return comics.data
  }).catch(() => Promise.resolve([]))
}

module.exports = {
  get
}
