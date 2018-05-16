import React, { Component } from 'react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import Login from '../api/Login'
import Comics from '../api/Comics'
import { updateBadgeText } from '../utils/BadgeUtils'
import { filterUnread } from '../utils/ComicsUtil'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      unreadComics: []
    }
  }

  componentDidMount () {
    Login.isLoggedIn().then((isLoggedIn) => {
      this.setState({isLoggedIn})
    })

    Comics.get().then((comics) => {
      this.setState({unreadComics: filterUnread(comics)})
      updateBadgeText(comics)
    })
  }

  render () {
    return (
      <div>
        <Header />
        {
          this.state.isLoggedIn
            ? <MainSection comics={this.state.unreadComics} />
            : <div>{'Please do log in.'}</div>
        }
        <Footer comics={this.state.unreadComics} isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}
