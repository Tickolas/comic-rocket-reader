function validate (comics) {
  if (!Array.isArray(comics)) {
    throw new Error('Must pass an array of comics.')
  }
}

function filterUnread (comics) {
  validate(comics)
  return comics.filter(comic => comic.idx < comic.max_idx)
}

function countUnreadPages (comics) {
  validate(comics)
  return filterUnread(comics).reduce((totalPages, comic) => {
    return totalPages + 1 + (comic.max_idx - comic.idx)
  }, 0)
}

function filterRead (comics) {
  validate(comics)
  return comics.filter(comic => comic.idx === comic.max_idx)
}

/**
 * Filters out comics with a current page greater than the last known page.
 * This sometimes happens when a comic creator updates their page indexing
 * style.
 *
 * @param comics
 * @returns {Array} All erroneous comics.
 */
function filterErroneous (comics) {
  validate(comics)
  return comics.filter(comic => comic.idx > comic.max_idx)
}

module.exports = {
  filterUnread,
  countUnreadPages,
  filterRead,
  filterErroneous
}
