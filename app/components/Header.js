import React from 'react'
import { PropTypes } from 'prop-types'
import { UNREAD_COMICS, READ_COMICS, ERRONEUS_COMICS } from '../constants/DisplayModes'

const Header = ({onDisplayModeChange, hasErroneousComics}) => {
  const getErroneousComicsButton = () => {
    if (hasErroneousComics) {
      return (
        <button onClick={() => onDisplayModeChange(ERRONEUS_COMICS)}>Erroneous</button>
      )
    }
  }

  return (
    <header>
      <img src='img/reader-logo.png' alt='Comic Rocket Reader' />
      <button onClick={() => onDisplayModeChange(UNREAD_COMICS)}>Unread</button>
      <button onClick={() => onDisplayModeChange(READ_COMICS)}>Read</button>
      { getErroneousComicsButton() }
    </header>
  )
}

Header.propTypes = {
  onDisplayModeChange: PropTypes.func.isRequired,
  hasErroneousComics: PropTypes.bool
}

export default Header
