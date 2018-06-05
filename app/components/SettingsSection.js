import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { BY_COMIC_NAME, BY_UNREAD_PAGES } from '../constants/SortModes'
import { CHANGE_SETTINGS } from '../constants/ActionTypes'

const SettingsSection = ({changeSettings, settings}) => {
  return (
    <section>
      <div>
        <span>Sort by: </span>
        <input type='radio' name='sortBy' onClick={() => changeSettings({sortMode: BY_COMIC_NAME})} checked={settings.sortMode === BY_COMIC_NAME} /> Comic Name<br />
        <input type='radio' name='sortBy' onClick={() => changeSettings({sortMode: BY_UNREAD_PAGES})} checked={settings.sortMode === BY_UNREAD_PAGES} /> Pages Left<br />
      </div>
      <div>
        <span>Reverse: </span>
        <input type='radio' name='sortOrder' onClick={() => changeSettings({reverseSort: true})} checked={settings.reverseSort} /> Yes<br />
        <input type='radio' name='sortOrder' onClick={() => changeSettings({reverseSort: false})} checked={!settings.reverseSort} /> No<br />
      </div>
    </section>
  )
}

SettingsSection.propTypes = {
  changeSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    settings: state.appReducer.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSettings: settings => {
      dispatch({type: CHANGE_SETTINGS, payload: {settings}})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsSection)
