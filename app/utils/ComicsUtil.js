function filterUnread(comics) {
  if (!Array.isArray(comics)) {
    throw new Error('Must pass an array of comics.');
  }

  return comics.filter(comic => comic.idx < comic.max_idx);
}

module.exports = {
  filterUnread
};
