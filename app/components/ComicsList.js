import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ComicRow from './ComicRow';

export default class ComicsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: props.comics
    };
  }

  render() {
    return (
      <div>
        {
          this.state.comics.map(comic =>
            <ComicRow key={comic.slug} comic={comic} />
          )
        }
      </div>
    );
  }
}

ComicsList.propTypes = {
  comics: PropTypes.array
};
