function openNewTabFor(comic, closeExtension) {
  window.chrome.tabs.create({ active: !!closeExtension, url: encodeURI(comic.uri) });
}

module.exports = {
  openNewTabFor
};