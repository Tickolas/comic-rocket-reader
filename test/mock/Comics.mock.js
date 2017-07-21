const UNREAD_PAGES = {
  rating: 'PG',
  genres: [],
  name: 'A Mad Tea-Party',
  idx: 1,
  uri: 'http://www.jonathondalton.com/?p=325',
  max_idx: 42,
  banner_url: 'https://www.comic-rocket.com/public/banner/a-mad-tea-party.gif',
  slug: 'a-mad-tea-party'
};
const MANY_UNREAD_PAGES = {
  rating: 'PG',
  genres: [],
  name: 'Bloom County',
  idx: 1,
  uri: 'http://www.jonathondalton.com/?p=325',
  max_idx: 3000,
  banner_url: 'https://www.comic-rocket.com/public/banner/a-mad-tea-party.gif',
  slug: 'a-mad-tea-party'
};
const UNUSUAL_NAME = {
  rating: 'PG',
  genres: [],
  name: 'Åkes Bilder',
  idx: 1,
  uri: 'http://www.åke.com/?p=2',
  max_idx: 2,
  banner_url: 'https://www.comic-rocket.com/public/banner/åkes-bilder.gif',
  slug: 'åkes-bilder'
};
const NO_UNREAD_PAGES = {
  rating: '?',
  genres: [],
  name: 'Gunnerkrigg Court',
  idx: 34,
  uri: 'http://www.gunnerkrigg.com/33',
  max_idx: 34,
  banner_url: '',
  slug: 'annie-in-the-forest-part-1-gunnerkrigg-court-sidestory'
};
const ERRONEOUS_PAGE_COUNT = {
  rating: '?',
  genres: [],
  name: 'Dreamland Chronicles',
  idx: 42,
  uri: 'http://www.dreamlandchronicles.com/33',
  max_idx: 34,
  banner_url: '',
  slug: 'dreamland-chronicles'
};
const ComicsMock = [UNREAD_PAGES, NO_UNREAD_PAGES, ERRONEOUS_PAGE_COUNT];

const ComicsDataMock = {
  data: ComicsMock
};

module.exports = {
  ComicsMock,
  ComicsDataMock,
  ComicWith: {
    UNREAD_PAGES,
    NO_UNREAD_PAGES,
    MANY_UNREAD_PAGES,
    ERRONEOUS_PAGE_COUNT,
    UNUSUAL_NAME
  }
};
