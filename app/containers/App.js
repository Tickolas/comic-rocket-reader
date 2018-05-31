import React, { Component } from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import Comics from '../api/Comics'
import { updateBadgeText } from '../utils/BadgeUtils'
import { sortReadUnreadComics } from '../utils/ComicsUtil'
import style from './App.css'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { LOGIN_CHECK } from '../constants/ActionTypes'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount () {
    this.props.loginCheck()

    Comics.get().then((comics) => {
      this.setState({comics: sortReadUnreadComics(comics)})
      updateBadgeText(comics)
    })
  }

  render () {
    return (
      <div className={style.app}>
        <Header hasErroneousComics={!!(this.state.comics && this.state.comics.erroneousComics.length)} />
        {
          this.props.isLoggedIn && this.state.comics
            ? <MainSection comics={this.state.comics[this.props.state.appReducer.displayMode]} />
            : <Loading />
        }
        <Footer comics={this.state.comics && this.state.comics[this.state.displayMode]} isLoggedIn={this.props.isLoggedIn} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state,
    isLoggedIn: state.appReducer.isLoggedIn
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
