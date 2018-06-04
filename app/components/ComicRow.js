import React from 'react'
import { PropTypes } from 'prop-types'
import { openSingleNewTabFor } from '../utils/ChromeUtils'
import ComicRowStyle from './ComicRow.css'
import { connect } from 'react-redux'
import { ADD_COMIC_TO_BACKLOG, REMOVE_COMIC_FROM_BACKLOG } from '../constants/ActionTypes'

const ComicRow = ({comic, backlog, addToBacklog, removeFromBacklog}) => {
  function getBanner () {
    if (comic.banner_url) {
      return <img className={ComicRowStyle.comicRow__banner__image} src={comic.banner_url} alt={comic.name} />
    } else {
      return <div className={ComicRowStyle.comicRow__banner__placeholder}><div>{comic.name}</div></div>
    }
  }

  function getBacklogButton () {
    if (!backlog.find(slug => slug === comic.slug)) {
      return <div className={ComicRowStyle.comicRow__backlogButton} onClick={() => addToBacklog(comic)}>
        <span>V</span>
      </div>
    } else {
      return <div className={ComicRowStyle.comicRow__backlogButton} onClick={() => removeFromBacklog(comic)}>
        <span>^</span>
      </div>
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
      {
        getBacklogButton()
      }
    </div>
  )
}

ComicRow.propTypes = {
  comic: PropTypes.object.isRequired,
  backlog: PropTypes.array.isRequired,
  addToBacklog: PropTypes.func.isRequired,
  removeFromBacklog: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    backlog: state.comicsReducer.backlog
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
