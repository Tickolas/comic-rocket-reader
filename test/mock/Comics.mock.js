const ComicsMock = [{
  rating: 'PG',
  genres: [],
  name: 'A Mad Tea-Party',
  idx: 7,
  uri: 'http://www.jonathondalton.com/?p=325',
  max_idx: 331,
  banner_url: 'https://www.comic-rocket.com/public/banner/a-mad-tea-party.gif',
  slug: 'a-mad-tea-party'
},{
  rating: '?',
  genres: [],
  name: 'Annie in the Forest, part 1 (Gunnerkrigg Court Sidestory)',
  idx: 34,
  uri: 'http://www.gunnerkrigg.com/extracomics/comic.php?c=Annie%20in%20the%20Forest%20Part%201&p=33',
  max_idx: 34,
  banner_url: '',
  slug: 'annie-in-the-forest-part-1-gunnerkrigg-court-sidestory'
}];

const ComicsDataMock = {
  data: ComicsMock
};

module.exports = {
  ComicsMock,
  ComicsDataMock
};