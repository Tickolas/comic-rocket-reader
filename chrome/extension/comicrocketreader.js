import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../../app/containers/Root'
import './comicrocketreader.css'
import { initialState } from '../../app/reducers/index'

chrome.storage.local.get('state', (obj) => {
  // TODO: Enable get stored state
  // const { state } = obj
  // const initialStateStored = JSON.parse(state || '{}')

  const createStore = require('../../app/store/configureStore')

  ReactDOM.render(
    <Root store={createStore(initialState)} />,
    document.querySelector('#root')
  )
})
