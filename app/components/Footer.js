import React from 'react'
import style from './Footer.css'
import { PropTypes } from 'prop-types'
import { openAllComicsInTabs } from '../utils/ChromeUtils'
import { connect } from 'react-redux'

const Footer = ({comics, showOpenAllButton}) => {
  const getOpenAllButton = () => {
    if (showOpenAllButton) {
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
  showOpenAllButton: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    comics: state.comicsReducer.comics ? state.comicsReducer.comics[state.appReducer.displayMode] : [],
    showOpenAllButton: state.appReducer.isLoggedIn && !!state.comicsReducer.comics
  }
}

export default connect(mapStateToProps)(Footer)
