/* global chrome */

function set (newData) {
  return get().then(oldData => {
    chrome.storage.local.set({
      comicRocketReader: Object.assign({}, oldData.comicRocketReader, newData)
    })
  })
}

function get () {
  return new Promise(resolve => {
    chrome.storage.local.get(['comicRocketReader'], (data) => {
      resolve(data)
    })
  })
}

export default {
  set,
  get
}
