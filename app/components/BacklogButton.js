import React from 'react'
import { PropTypes } from 'prop-types'
import style from './BacklogButton.css'
import { connect } from 'react-redux'
import { ADD_COMIC_TO_BACKLOG, REMOVE_COMIC_FROM_BACKLOG } from '../constants/ActionTypes'

const BacklogButton = ({comic, backlog, addToBacklog, removeFromBacklog}) => {
  if (!backlog.find(slug => slug === comic.slug)) {
    return <div className={style.backlogButton} onClick={() => addToBacklog(comic)}>
      <img className={style.backlogButton__content} src='img/arrow-down.png' />
    </div>
  } else {
    return <div className={style.backlogButton} onClick={() => removeFromBacklog(comic)}>
      <img className={style.backlogButton__content} src='img/arrow-up.png' />
    </div>
  }
}

BacklogButton.propTypes = {
  comic: PropTypes.object.isRequired,
  backlog: PropTypes.array.isRequired,
  addToBacklog: PropTypes.func.isRequired,
  removeFromBacklog: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    backlog: state.comicsReducer.backlog
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addToBacklog: comic => {
      dispatch({
        type: ADD_COMIC_TO_BACKLOG,
        payload: {
          comic
        }
      })
    },
    removeFromBacklog: comic => {
      dispatch({
        type: REMOVE_COMIC_FROM_BACKLOG,
        payload: {
          comic
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BacklogButton)
