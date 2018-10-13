import React from 'react'
import { PropTypes } from 'prop-types'
import { BACKLOGGED_COMICS, ERRONEUS_COMICS, READ_COMICS, SETTINGS, UNREAD_COMICS } from '../constants/DisplayModes'
import style from './ControlBar.css'
import { connect } from 'react-redux'
import { CHANGE_DISPLAY_MODE } from '../constants/ActionTypes'

const ControlBar = ({onDisplayModeChange, hasErroneousComics, hasBackloggedComics, isLoggedIn, isFullyLoaded}) => {
  const getBackloggedComicsDisplayModeButton = () => {
    if (hasBackloggedComics) {
      return <button className={style.controlBar__button} onClick={() => onDisplayModeChange(BACKLOGGED_COMICS)}>Backlog</button>
    }
  }

  const getErroneousComicsDisplayModeButton = () => {
    if (hasErroneousComics) {
      return (
        <button className={style.controlBar__button} onClick={() => onDisplayModeChange(ERRONEUS_COMICS)}>Erroneous</button>
      )
    }
  }

  if (isLoggedIn && isFullyLoaded) {
    return (
      <div className={style.controlBar}>
        <button className={style.controlBar__button} onClick={() => onDisplayModeChange(UNREAD_COMICS)}>Unread</button>
        <button className={style.controlBar__button} onClick={() => onDisplayModeChange(READ_COMICS)}>Read</button>
        { getBackloggedComicsDisplayModeButton() }
        { getErroneousComicsDisplayModeButton() }
        <button className={style.controlBar__button} onClick={() => onDisplayModeChange(SETTINGS)}>Settings</button>
      </div>
    )
  }

  return null
}

ControlBar.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar)
