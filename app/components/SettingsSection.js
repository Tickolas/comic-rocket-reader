import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { BY_COMIC_NAME, BY_UNREAD_PAGES } from '../constants/SortModes'
import { CHANGE_SETTINGS } from '../constants/ActionTypes'
import { PAGES_LEFT, X_SLASH_Y } from '../constants/UnreadPageMode'

const SettingsSection = ({changeSettings, settings}) => {
  return (
    <section>
      <div>
        <p>Sort by: </p>
        <input type='radio' name='sortBy' onClick={() => changeSettings({sortMode: BY_COMIC_NAME})}
          checked={settings.sortMode === BY_COMIC_NAME} readOnly /> Comic Name<br />
        <input type='radio' name='sortBy' onClick={() => changeSettings({sortMode: BY_UNREAD_PAGES})}
          checked={settings.sortMode === BY_UNREAD_PAGES} readOnly /> Pages Left<br />
      </div>
      <div>
        <p>Reverse: </p>
        <input type='radio' name='sortOrder' onClick={() => changeSettings({reverseSort: true})}
          checked={settings.reverseSort} readOnly /> Yes<br />
        <input type='radio' name='sortOrder' onClick={() => changeSettings({reverseSort: false})}
          checked={!settings.reverseSort} readOnly /> No<br />
      </div>
      <div>
        <p>How to show pages left: </p>
        <input type='radio' name='unreadPageMode' onClick={() => changeSettings({unreadPageMode: X_SLASH_Y})}
          checked={settings.unreadPageMode === X_SLASH_Y} readOnly /> 42 / 1337<br />
        <input type='radio' name='unreadPageMode' onClick={() => changeSettings({unreadPageMode: PAGES_LEFT})}
          checked={settings.unreadPageMode === PAGES_LEFT} readOnly /> [ 44 ]<br />
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
