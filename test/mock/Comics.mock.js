const ComicsMock = [{
  rating: 'PG',
  genres: [],
  name: 'A Mad Tea-Party',
  idx: 7,
  uri: 'http://www.jonathondalton.com/?p=325',
  max_idx: 331,
  banner_url: 'https://www.comic-rocket.com/public/banner/a-mad-tea-party.gif',
  slug: 'a-mad-tea-party'
}, {
  rating: '?',
  genres: [],
  name: 'Gunnerkrigg Court',
  idx: 34,
  uri: 'http://www.gunnerkrigg.com/33',
  max_idx: 34,
  banner_url: '',
  slug: 'annie-in-the-forest-part-1-gunnerkrigg-court-sidestory'
}, {
  rating: '?',
  genres: [],
  name: 'Dreamland Chronicles',
  idx: 42,
  uri: 'http://www.dreamlandchronicles.com/33',
  max_idx: 34,
  banner_url: '',
  slug: 'dreamland-chronicles'
}];

const ComicsDataMock = {
  data: ComicsMock
};

module.exports = {
  ComicsMock,
  ComicsDataMock
};