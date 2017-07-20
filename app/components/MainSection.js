import React, { Component } from 'react';
import Comics from '../api/Comics';

export default class MainSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: []
    };
  }

  componentDidMount() {
    Comics.get().then((comics) => {
      this.setState({ comics });
    });
  }

  render() {
    return (
      <section>
        {this.state.comics.map(comic =>
          <li>{comic.name} ({comic.idx} / {comic.max_idx})</li>
        )}
      </section>
    );
  }
}
