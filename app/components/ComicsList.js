import React from 'react'
import { PropTypes } from 'prop-types'
import ComicRow from './ComicRow'
import style from './ComicsList.css'

const ComicsList = ({comics}) => {
  return (
    <div className={style.comicsList}>
      {
        comics.map(comic =>
          <ComicRow key={comic.slug} comic={comic} />
        )
      }
    </div>
  )
}

ComicsList.propTypes = {
  comics: PropTypes.array.isRequired
}

export default ComicsList
