import { SETTINGS_SYNCED } from '../constants/ActionTypes'
import store from '../store/Store'
import ChromeStorage from '../api/ChromeStorage'

function openSingleNewTabFor (comic) {
  openNewTabFor(comic, true)
}

function openAllComicsInTabs (comics) {
  comics.forEach((comic, index) => {
    if (index === comics.length - 1) {
      openSingleNewTabFor(comic)
    } else {
      openOneOfManyNewTabFor(comic)
    }
  })
}

function openOneOfManyNewTabFor (comic) {
  openNewTabFor(comic, false)
}

function openNewTabFor (comic, closeExtension) {
  window.chrome.tabs.create({ active: !!closeExtension, url: getWrappedUriFor(comic) })
}

function openLoginTab () {
  window.chrome.tabs.create({ active: true, url: 'https://www.comic-rocket.com/login' })
}

function getWrappedUriFor (comic) {
  const page = comic.idx === comic.max_idx ? comic.max_idx : comic.idx + 1
  return encodeURI(`http://www.comic-rocket.com/read/${comic.slug}/${(page)}?mark`)
}

function getSettings () {
  ChromeStorage.get().then(data => {
    store.dispatch({
      type: SETTINGS_SYNCED,
      payload: {
        settings: data.comicRocketReader.settings
      }
    })
  })
}

function saveSettings (settings) {
  ChromeStorage.set({settings})
}

export default {
  openSingleNewTabFor,
  openAllComicsInTabs,
  openLoginTab,
  getSettings,
  saveSettings
}
