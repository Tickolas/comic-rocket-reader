import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../../app/containers/Root'
import './comicrocketreader.css'
import store from '../../app/store/Store'

ReactDOM.render(
  <Root store={store} />,
  document.querySelector('#root')
)
