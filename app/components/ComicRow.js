import React from 'react'
import { PropTypes } from 'prop-types'
import { openNewTabFor } from '../utils/ChromeUtils'

const ComicRow = ({comic}) => {
  return (
    <div>
      <div onClick={() => openNewTabFor(comic, true)}>
        <img src={comic.banner_url} alt={comic.name} />
      </div>
      <div>[ {comic.idx} / {comic.max_idx} ]</div>
    </div>
  )
}

ComicRow.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicRow
