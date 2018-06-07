import React from 'react'
import { PropTypes } from 'prop-types'
import { openSingleNewTabFor } from '../utils/ChromeUtils'
import style from './ComicRow.css'
import { connect } from 'react-redux'
import { PAGES_LEFT, X_SLASH_Y } from '../constants/UnreadPageMode'
import BacklogButton from './BacklogButton'

const ComicRow = ({comic, unreadPageMode}) => {
  function getBanner () {
    if (comic.banner_url) {
      return <img className={style.comicRow__banner__image} src={comic.banner_url} alt={comic.name} />
    } else {
      return <div className={style.comicRow__banner__placeholder}><div>{comic.name}</div></div>
    }
  }

  function getPagesLeft () {
    if (unreadPageMode === X_SLASH_Y) {
      return <span className={style.comicRow__pages__text}>{comic.idx} / {comic.max_idx}</span>
    } else if (unreadPageMode === PAGES_LEFT) {
      return <span className={style.comicRow__pages__text}>[ {comic.max_idx - comic.idx} ]</span>
    }
  }

  return (
    <div className={style.comicRow}>
      <div className={style.comicRow__banner} onClick={() => openSingleNewTabFor(comic, true)}>
        {getBanner()}
      </div>
      <div className={style.comicRow__pages}>
        {getPagesLeft()}
      </div>
      <BacklogButton comic={comic} />
    </div>
  )
}

ComicRow.propTypes = {
  comic: PropTypes.object.isRequired,
  unreadPageMode: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    unreadPageMode: state.appReducer.settings.unreadPageMode
  }
}

export default connect(mapStateToProps)(ComicRow)
