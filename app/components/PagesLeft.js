import React from 'react'
import { PropTypes } from 'prop-types'
import style from './PagesLeft.css'
import { connect } from 'react-redux'
import { PAGES_LEFT, X_SLASH_Y } from '../constants/UnreadPageMode'

const PagesLeft = ({comic, unreadPageMode}) => {
  function getPageModeInner() {
    if (unreadPageMode === X_SLASH_Y) {
      return <span className={style.pagesLeft__text}>{comic.idx} / {comic.max_idx}</span>
    } else if (unreadPageMode === PAGES_LEFT) {
      return <span className={style.pagesLeft__text}>[ {comic.max_idx - comic.idx} ]</span>
    }
  }

  return (
    <div className={style.pagesLeft}>
      { getPageModeInner() }
    </div>
  )
}

PagesLeft.propTypes = {
  comic: PropTypes.object.isRequired,
  unreadPageMode: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    unreadPageMode: state.appReducer.settings.unreadPageMode
  }
}

export default connect(mapStateToProps)(PagesLeft)
