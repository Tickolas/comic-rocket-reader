import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class ComicRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comic: props.comic
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.comic.name}</div>
        <div>[{this.state.comic.idx} / {this.state.comic.max_idx}]</div>
      </div>
    );
  }
}

ComicRow.propTypes = {
  comic: PropTypes.object
};