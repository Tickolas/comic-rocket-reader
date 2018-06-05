import React from 'react'
import { PropTypes } from 'prop-types'
import ComicRow from './ComicRow'
import style from './ComicsList.css'
import { connect } from 'react-redux'
import { BY_COMIC_NAME, BY_UNREAD_PAGES } from '../constants/SortModes'

const ComicsList = ({comics, sortOrder, reverseSort}) => {
  function compareComics (comicA, comicB) {
    let a
    let b

    if (sortOrder === BY_COMIC_NAME) {
      a = comicA.name.toUpperCase()
      b = comicB.name.toUpperCase()
    } else if (sortOrder === BY_UNREAD_PAGES) {
      a = comicA.max_idx - comicA.idx
      b = comicB.max_idx - comicB.idx
    }

    if (!reverseSort) {
      if (a < b) { return -1 }
      if (a > b) { return 1 }
    } else {
      if (a > b) { return -1 }
      if (a < b) { return 1 }
    }
    return 0
  }

  return (
    <section className={style.comicsList}>
      {
        comics.sort(compareComics).map(comic =>
          <ComicRow key={comic.slug} comic={comic} />
        )
      }
    </section>
  )
}

ComicsList.propTypes = {
  comics: PropTypes.array.isRequired,
  sortOrder: PropTypes.string.isRequired,
  reverseSort: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    comics: state.comicsReducer.comics[state.appReducer.displayMode],
    sortOrder: state.appReducer.settings.sortMode,
    reverseSort: state.appReducer.settings.reverseSort
  }
}

export default connect(mapStateToProps)(ComicsList)
