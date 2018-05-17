import React from 'react'
import style from './Footer.css'
import { PropTypes } from 'prop-types'
import { openAllComicsInTabs } from '../utils/ChromeUtils'

const Footer = ({comics, isLoggedIn}) => {
  const getOpenAllButton = () => {
    if (isLoggedIn) {
      return <button className={style.footer__button} onClick={() => { openAllComicsInTabs(comics) }}>Open 'em all!'</button>
    }
  }

  return (
    <footer className={style.footer}>
      {getOpenAllButton()}
    </footer>
  )
}

Footer.propTypes = {
  comics: PropTypes.array,
  isLoggedIn: PropTypes.bool
}

export default Footer
