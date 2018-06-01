function validate (comics) {
  if (!Array.isArray(comics)) {
    throw new Error('Must pass an array of comics.')
  }
}

const sortReadUnreadComics = (comics, backlog) => {
  validate(comics)

  const result = {
    unreadComics: [],
    readComics: [],
    erroneousComics: [],
    backloggedComics: []
  }

  comics.forEach(comic => {
    if (backlog && backlog.find(slug => slug === comic.slug)) {
      result.backloggedComics.push(comic)
    } else if (comic.idx < comic.max_idx) {
      result.unreadComics.push(comic)
    } else if (comic.idx > comic.max_idx) {
      result.erroneousComics.push(comic)
    } else {
      result.readComics.push(comic)
    }
  })

  return result
}

function countUnreadPages (comics) {
  return sortReadUnreadComics(comics).unreadComics.reduce((totalPages, comic) => {
    return totalPages + 1 + (comic.max_idx - comic.idx)
  }, 0)
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
  countUnreadPages,
  filterErroneous,
  sortReadUnreadComics
}
