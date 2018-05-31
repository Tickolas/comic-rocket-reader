import React from 'react'
import { PropTypes } from 'prop-types'
import { UNREAD_COMICS, READ_COMICS, ERRONEUS_COMICS } from '../constants/DisplayModes'
import style from './Header.css'
import { connect } from 'react-redux'
import { CHANGE_DISPLAY_MODE } from '../constants/ActionTypes'

const Header = ({onDisplayModeChange, hasErroneousComics, isLoggedIn}) => {
  const getDisplayModeButtons = () => {
    if (isLoggedIn) {
      return (
        <div className={style.header__buttons}>
          <button onClick={() => onDisplayModeChange(UNREAD_COMICS)}>Unread</button>
          <button onClick={() => onDisplayModeChange(READ_COMICS)}>Read</button>
          { getErroneousComicsDisplayModeButton() }
        </div>
      )
    }
  }

  const getErroneousComicsDisplayModeButton = () => {
    if (hasErroneousComics) {
      return (
        <button onClick={() => onDisplayModeChange(ERRONEUS_COMICS)}>Erroneous</button>
      )
    }
  }

  return (
    <header className={style.header}>
      <img className={style.header__banner} src='img/reader-logo.png' alt='Comic Rocket Reader' />
      { getDisplayModeButtons() }
    </header>
  )
}

Header.propTypes = {
  onDisplayModeChange: PropTypes.func.isRequired,
  hasErroneousComics: PropTypes.bool,
  isLoggedIn: PropTypes.bool
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDisplayModeChange: (displayMode) => {
      dispatch({type: CHANGE_DISPLAY_MODE, payload: {displayMode}})
    }
  }
}

export default connect(state => state, mapDispatchToProps)(Header)
