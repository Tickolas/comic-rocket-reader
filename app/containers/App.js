import React, { Component } from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import Login from '../api/Login'
import Comics from '../api/Comics'
import { updateBadgeText } from '../utils/BadgeUtils'
import { sortReadUnreadComics } from '../utils/ComicsUtil'
import style from './App.css'
import Loading from '../components/Loading'
import { connect } from 'react-redux'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount () {
    Login.isLoggedIn().then((isLoggedIn) => {
      this.setState({isLoggedIn})
    })

    Comics.get().then((comics) => {
      this.setState({comics: sortReadUnreadComics(comics)})
      updateBadgeText(comics)
    })
  }

  render () {
    return (
      <div className={style.app}>
        <Header isLoggedIn={this.state.isLoggedIn}
          hasErroneousComics={!!(this.state.comics && this.state.comics.erroneousComics.length)} />
        {
          this.state.isLoggedIn && this.state.comics
            ? <MainSection comics={this.state.comics[this.props.state.appReducer.displayMode]} />
            : <Loading />
        }
        <Footer comics={this.state.comics && this.state.comics[this.state.displayMode]} isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(App)
