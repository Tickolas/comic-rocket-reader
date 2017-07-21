function getWrappedUriFor(comic) {
  return encodeURI(`http://www.comic-rocket.com/read/${comic.slug}/${(comic.idx + 1)}`);
}

function openNewTabFor(comic, closeExtension) {
  window.chrome.tabs.create({ active: !!closeExtension, url: getWrappedUriFor(comic) });
}

module.exports = {
  openNewTabFor
};