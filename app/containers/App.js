import React, { Component } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ControlBar from '../components/ControlBar'
import style from './App.css'
import { connect } from 'react-redux'
import { LOGIN_CHECK, SYNC_SETTINGS } from '../constants/ActionTypes'
import MainSection from '../components/MainSection'

class App extends Component {
  componentDidMount () {
    this.props.syncSettings()
    this.props.loginCheck()
  }

  render () {
    return (
      <div className={style.app}>
        <Banner />
        <ControlBar />
        <MainSection />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFullyLoaded: state.appReducer.isFullyLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginCheck: () => {
      dispatch({type: LOGIN_CHECK})
    },
    syncSettings: () => {
      dispatch({type: SYNC_SETTINGS})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
