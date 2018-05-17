import React from 'react'
import { PropTypes } from 'prop-types'
import { openSingleNewTabFor } from '../utils/ChromeUtils'
import ComicRowStyle from './ComicRow.css'

const ComicRow = ({comic}) => {
  function getBanner () {
    if (comic.banner_url) {
      return <img className={ComicRowStyle.comicRow__banner__image} src={comic.banner_url} alt={comic.name} />
    } else {
      return <div className={ComicRowStyle.comicRow__banner__placeholder}><div>{comic.name}</div></div>
    }
  }

  return (
    <div className={ComicRowStyle.comicRow}>
      <div className={ComicRowStyle.comicRow__banner} onClick={() => openSingleNewTabFor(comic, true)}>
        {getBanner()}
      </div>
      <div className={ComicRowStyle.comicRow__pages}>
        <span className={ComicRowStyle.comicRow__pages__text}>{comic.idx} / {comic.max_idx}</span>
      </div>
    </div>
  )
}

ComicRow.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicRow
