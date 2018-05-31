import React from 'react'
import { PropTypes } from 'prop-types'
import { UNREAD_COMICS, READ_COMICS, ERRONEUS_COMICS } from '../constants/DisplayModes'
import style from './Header.css'
import { connect } from 'react-redux'
import { CHANGE_DISPLAY_MODE } from '../constants/ActionTypes'

const Header = ({onDisplayModeChange, hasErroneousComics, isFullyLoaded}) => {
  const getDisplayModeButtons = () => {
    if (isFullyLoaded) {
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
  hasErroneousComics: PropTypes.bool.isRequired,
  isFullyLoaded: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isFullyLoaded: state.appReducer.isLoggedIn && !!state.comicsReducer.comics,
    hasErroneousComics: !!state.comicsReducer.comics && !!state.comicsReducer.comics.erroneousComics.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDisplayModeChange: (displayMode) => {
      dispatch({type: CHANGE_DISPLAY_MODE, payload: {displayMode}})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
