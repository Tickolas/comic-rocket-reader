import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../../app/containers/Root'
import './comicrocketreader.css'
import store from '../../app/store/Store'

chrome.storage.local.get('state', (obj) => {
  // TODO: Enable get stored state
  // const { state } = obj
  // const initialStateStored = JSON.parse(state || '{}')

  ReactDOM.render(
    <Root store={store} />,
    document.querySelector('#root')
  )
})
