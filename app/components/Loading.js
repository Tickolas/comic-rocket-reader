import React from 'react'
import style from './Loading.css'

const Loading = () => {
  return (
    <div className={style.loading}>
      <img className={style.loading__image} src='img/loading.gif' alt='Loading your comics...' />
    </div>
  )
}

export default Loading
