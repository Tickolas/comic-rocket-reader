import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import style from './App.css'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { LOGIN_CHECK } from '../constants/ActionTypes'
import ComicsList from '../components/ComicsList'

class App extends Component {
  componentDidMount () {
    this.props.loginCheck()
  }

  render () {
    return (
      <div className={style.app}>
        <Header />
        {
          this.props.isFullyLoaded
            ? <ComicsList />
            : <Loading />
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFullyLoaded: state.appReducer.isLoggedIn && !!state.comicsReducer.comics
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
