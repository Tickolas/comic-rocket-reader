import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { BY_COMIC_NAME, BY_UNREAD_PAGES } from '../constants/SortModes'
import { CHANGE_SORT_MODE } from '../constants/ActionTypes'

const SettingsSection = ({changeSortMode, sortMode}) => {
  return (
    <section>
      <div>
        <span>Sort by: </span>
        <input type='radio' name='sortBy' onClick={() => changeSortMode(BY_COMIC_NAME)} checked={sortMode === BY_COMIC_NAME} /> Comic Name<br />
        <input type='radio' name='sortBy' onClick={() => changeSortMode(BY_UNREAD_PAGES)} checked={sortMode === BY_UNREAD_PAGES} /> Pages Left<br />
      </div>
    </section>
  )
}

SettingsSection.propTypes = {
  changeSortMode: PropTypes.func.isRequired,
  sortMode: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    sortMode: state.appReducer.settings.sortMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSortMode: sortMode => {
      dispatch({type: CHANGE_SORT_MODE, payload: {sortMode}})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsSection)
