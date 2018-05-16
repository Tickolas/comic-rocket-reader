import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../../app/containers/Root'

window.chrome.storage.local.get('state', () => {
  ReactDOM.render(
    <Root />,
    document.querySelector('#root')
  )
})
