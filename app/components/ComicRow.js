import React from 'react'
import { PropTypes } from 'prop-types'
import { openNewTabFor } from '../utils/ChromeUtils'

const ComicRow = ({comic}) => {
  function getBanner () {
    if(comic.banner_url) {
      return <img src={comic.banner_url} alt={comic.name} />
    } else {
      return <h2>{comic.name}</h2>
    }
  }

  return (
    <div>
      <div onClick={() => openNewTabFor(comic, true)}>
        {getBanner()}
      </div>
      <div>[ {comic.idx} / {comic.max_idx} ]</div>
    </div>
  )
}

ComicRow.propTypes = {
  comic: PropTypes.object.isRequired
}

export default ComicRow
