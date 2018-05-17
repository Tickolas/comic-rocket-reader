import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import ComicRow from './ComicRow'

const ComicsList = ({comics}) => {
  return (
    <div>
      {
        comics.map(comic =>
          <ComicRow key={comic.slug} comic={comic} />
        )
      }
    </div>
  )
}

ComicsList.propTypes = {
  comics: PropTypes.array.isRequired
}

export default ComicsList
