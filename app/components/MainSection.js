import React from 'react'
import { PropTypes } from 'prop-types'
import ComicsList from './ComicsList'

const MainSection = ({comics}) => {
  return (
    <section>
      <ComicsList comics={comics} />
    </section>
  )
}

MainSection.propTypes = {
  comics: PropTypes.array.isRequired
}

export default MainSection
