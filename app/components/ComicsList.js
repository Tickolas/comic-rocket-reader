import React from 'react'
import { PropTypes } from 'prop-types'
import ComicRow from './ComicRow'
import style from './ComicsList.css'
import { connect } from 'react-redux'

const ComicsList = ({comics}) => {
  return (
    <section className={style.comicsList}>
      {
        comics.map(comic =>
          <ComicRow key={comic.slug} comic={comic} />
        )
      }
    </section>
  )
}

ComicsList.propTypes = {
  comics: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    comics: state.comicsReducer.comics[state.appReducer.displayMode]
  }
}

export default connect(mapStateToProps)(ComicsList)
