import React from 'react'
import { PropTypes } from 'prop-types'
import { BACKLOGGED_COMICS, ERRONEUS_COMICS, READ_COMICS, UNREAD_COMICS } from '../constants/DisplayModes'
import style from './Header.css'
import { connect } from 'react-redux'
import { CHANGE_DISPLAY_MODE } from '../constants/ActionTypes'
import ChromeUtils from '../utils/ChromeUtils'

const Header = ({onDisplayModeChange, hasErroneousComics, hasBackloggedComics, isLoggedIn, isFullyLoaded}) => {
  const getDisplayModeButtons = () => {
    if (isLoggedIn && isFullyLoaded) {
      return (
        <div className={style.header__buttons}>
          <button onClick={() => onDisplayModeChange(UNREAD_COMICS)}>Unread</button>
          <button onClick={() => onDisplayModeChange(READ_COMICS)}>Read</button>
          { getBackloggedComicsDisplayModeButton() }
          { getErroneousComicsDisplayModeButton() }
        </div>
      )
    }
  }

  const getBackloggedComicsDisplayModeButton = () => {
    if (hasBackloggedComics) {
      return <button onClick={() => onDisplayModeChange(BACKLOGGED_COMICS)}>Backlog</button>
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
      <a className={style.header__bannerContainer} href='#' title='Go to Comic Rocket' onClick={ChromeUtils.openLoginTab}>
        <img className={style.header__banner} src='img/reader-logo.png' alt='Comic Rocket Reader' />
      </a>
      { getDisplayModeButtons() }
    </header>
  )
}

Header.propTypes = {
  onDisplayModeChange: PropTypes.func.isRequired,
  hasErroneousComics: PropTypes.bool.isRequired,
  hasBackloggedComics: PropTypes.bool.isRequired,
  isFullyLoaded: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.appReducer.isLoggedIn,
    isFullyLoaded: state.appReducer.isFullyLoaded,
    hasErroneousComics: !!state.comicsReducer.comics && !!state.comicsReducer.comics.erroneousComics.length,
    hasBackloggedComics: !!state.comicsReducer.comics && !!state.comicsReducer.comics.backloggedComics.length
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
