import React, { Component } from 'react';
import Comics from '../api/Comics';
import Login from '../api/Login';
import ComicsList from './ComicsList';
import { filterUnread } from '../utils/ComicsUtil';

export default class MainSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      unreadComics: []
    };
  }

  componentDidMount() {
    Login.isLoggedIn().then((isLoggedIn) => {
      this.setState({ isLoggedIn });
    });

    Comics.get().then((comics) => {
      this.setState({ unreadComics: filterUnread(comics) });
    });
  }

  render() {
    return (
      <section>
        {
          this.state.isLoggedIn ?
            <ComicsList comics={this.state.unreadComics} /> :
            <div>{'Please do log in.'}</div>
        }
      </section>
    );
  }
}
