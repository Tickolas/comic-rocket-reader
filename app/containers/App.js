import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import style from './App.css'
import { connect } from 'react-redux'
import { LOGIN_CHECK } from '../constants/ActionTypes'
import MainSection from '../components/MainSection'

class App extends Component {
  componentDidMount () {
    this.props.loginCheck()
  }

  render () {
    return (
      <div className={style.app}>
        <Header />
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
