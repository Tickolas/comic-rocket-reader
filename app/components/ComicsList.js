import React from 'react'
import { PropTypes } from 'prop-types'
import ComicRow from './ComicRow'
import style from './ComicsList.css'
import { connect } from 'react-redux'
import { BY_COMIC_NAME } from '../constants/SortModes'

const ComicsList = ({comics, sortOrder}) => {
  function sortFunction (comicA, comicB) {
    if (sortOrder === BY_COMIC_NAME) {
      if (comicA.name.toUpperCase() < comicB.name.toUpperCase()) { return -1 }
      if (comicA.name.toUpperCase() > comicB.name.toUpperCase()) { return 1 }
      return 0
    }
  }

  return (
    <section className={style.comicsList}>
      {
        comics.sort(sortFunction).map(comic =>
          <ComicRow key={comic.slug} comic={comic} />
        )
      }
    </section>
  )
}

ComicsList.propTypes = {
  comics: PropTypes.array.isRequired,
  sortOrder: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    comics: state.comicsReducer.comics[state.appReducer.displayMode],
    sortOrder: state.appReducer.settings.sortMode
  }
}

export default connect(mapStateToProps)(ComicsList)
