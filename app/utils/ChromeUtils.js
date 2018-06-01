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
  const page = comic.idx === comic.max_idx ? comic.max_idx : comic.idx + 1
  return encodeURI(`http://www.comic-rocket.com/read/${comic.slug}/${(page)}?mark`)
}

export default {
  openSingleNewTabFor,
  openAllComicsInTabs
}
