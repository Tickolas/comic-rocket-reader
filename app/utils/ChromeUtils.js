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

function getWrappedUriFor (comic) {
  return encodeURI(`http://www.comic-rocket.com/read/${comic.slug}/${(comic.idx + 1)}?mark`)
}

export default {
  openSingleNewTabFor,
  openAllComicsInTabs
}
