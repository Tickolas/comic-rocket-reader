import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { openNewTabFor } from '../utils/ChromeUtils'

export default class ComicRow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comic: props.comic
    }
  }

  render () {
    return (
      <div>
        <div onClick={() => openNewTabFor(this.state.comic, true)}>
          <img src={this.state.comic.banner_url} alt={this.state.comic.name} />
        </div>
        <div>[ {this.state.comic.idx} / {this.state.comic.max_idx} ]</div>
      </div>
    )
  }
}

ComicRow.propTypes = {
  comic: PropTypes.object
}
