import React from 'react'
import { PropTypes } from 'prop-types'
import ComicRow from './ComicRow'
import style from './ComicsList.css'
import { connect } from 'react-redux'
import { compareComics } from '../utils/ComicsUtil'

const ComicsList = ({comics, sortOrder, reverseSort}) => {
  return (
    <section className={style.comicsList}>
      {
        comics.sort((a, b) => compareComics(a, b, sortOrder, reverseSort)).map(comic =>
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
