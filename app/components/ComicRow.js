import React from 'react'
import { PropTypes } from 'prop-types'
import { openSingleNewTabFor } from '../utils/ChromeUtils'
import style from './ComicRow.css'
import BacklogButton from './BacklogButton'
import PagesLeft from './PagesLeft'

const ComicRow = ({comic}) => {
  function getBanner () {
    if (comic.banner_url) {
      return <img className={style.comicRow__banner__image} src={comic.banner_url} alt={comic.name} />
    } else {
      return <div className={style.comicRow__banner__placeholder}><div>{comic.name}</div></div>
    }
  }

  return (
    <div className={style.comicRow}>
      <div className={style.comicRow__banner} onClick={() => openSingleNewTabFor(comic, true)}>
        {getBanner()}
      </div>
      <PagesLeft comic={comic} />
      <BacklogButton comic={comic} />
    </div>
  )
}

ComicRow.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicRow
