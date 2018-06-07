import React from 'react'
import { PropTypes } from 'prop-types'
import { openSingleNewTabFor } from '../utils/ChromeUtils'
import style from './ComicRow.css'
import { connect } from 'react-redux'
import { ADD_COMIC_TO_BACKLOG, REMOVE_COMIC_FROM_BACKLOG } from '../constants/ActionTypes'
import { PAGES_LEFT, X_SLASH_Y } from '../constants/UnreadPageMode'

const ComicRow = ({comic, backlog, unreadPageMode, addToBacklog, removeFromBacklog}) => {
  function getBanner () {
    if (comic.banner_url) {
      return <img className={style.comicRow__banner__image} src={comic.banner_url} alt={comic.name} />
    } else {
      return <div className={style.comicRow__banner__placeholder}><div>{comic.name}</div></div>
    }
  }

  function getBacklogButton () {
    if (!backlog.find(slug => slug === comic.slug)) {
      return <div className={style.comicRow__backlogButton} onClick={() => addToBacklog(comic)}>
        <img className={style.backlogButton__content} src='img/arrow-down.png' />
      </div>
    } else {
      return <div className={style.comicRow__backlogButton} onClick={() => removeFromBacklog(comic)}>
        <img className={style.backlogButton__content} src='img/arrow-up.png' />
      </div>
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
      {
        getBacklogButton()
      }
    </div>
  )
}

ComicRow.propTypes = {
  comic: PropTypes.object.isRequired,
  backlog: PropTypes.array.isRequired,
  unreadPageMode: PropTypes.string.isRequired,
  addToBacklog: PropTypes.func.isRequired,
  removeFromBacklog: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    backlog: state.comicsReducer.backlog,
    unreadPageMode: state.appReducer.settings.unreadPageMode
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addToBacklog: comic => {
      dispatch({
        type: ADD_COMIC_TO_BACKLOG,
        payload: {
          comic
        }
      })
    },
    removeFromBacklog: comic => {
      dispatch({
        type: REMOVE_COMIC_FROM_BACKLOG,
        payload: {
          comic
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicRow)
