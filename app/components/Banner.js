import ChromeUtils from '../utils/ChromeUtils'
import React from 'react'
import { PropTypes } from 'prop-types'
import style from './ControlBar.css'

const Banner = () => {
  return (
    <header className={style.controlBar}>
      <a className={style.header__bannerContainer} href='#' title='Go to Comic Rocket'
         onClick={ChromeUtils.openLoginTab}>
        <img className={style.header__banner} src='img/reader-logo.png' alt='Comic Rocket Reader'/>
      </a>
    </header>
  )
}

export default Banner
