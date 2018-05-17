import React from 'react'
import { PropTypes } from 'prop-types'
import { UNREAD_COMICS, READ_COMICS, ERRONEUS_COMICS } from '../constants/DisplayModes'

const Header = ({onDisplayModeChange, hasErroneousComics, isLoggedIn}) => {
  const getDisplayModeButtons = () => {
    if (isLoggedIn) {
      return (
        <div>
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
    <header>
      <img src='img/reader-logo.png' alt='Comic Rocket Reader' />
      { getDisplayModeButtons() }
    </header>
  )
}

Header.propTypes = {
  onDisplayModeChange: PropTypes.func.isRequired,
  hasErroneousComics: PropTypes.bool,
  isLoggedIn: PropTypes.bool
}

export default Header
