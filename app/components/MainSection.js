import React from 'react'
import { PropTypes } from 'prop-types'
import ComicsList from './ComicsList'
import Loading from './Loading'
import { connect } from 'react-redux'
import ChromeUtils from '../utils/ChromeUtils'

const MainSection = ({isLoggedIn, isFullyLoaded}) => {
  const getContent = () => {
    if (isFullyLoaded && isLoggedIn) {
      return <ComicsList />
    } else if (isFullyLoaded && !isLoggedIn) {
      return <div>Please click <a href='#' onClick={ChromeUtils.openLoginTab}>Here</a> to log in!</div>
    } else {
      return <Loading />
    }
  }
  return (
    <section>
      { getContent() }
    </section>
  )
}

MainSection.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isFullyLoaded: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isFullyLoaded: state.appReducer.isFullyLoaded,
    isLoggedIn: state.appReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(MainSection)
