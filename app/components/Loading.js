import React from 'react'
import style from './Loading.css'

const Loading = () => {
  return (
    <section className={style.loading}>
      <img className={style.loading__image} src='img/loading.gif' alt='Loading your comics...' />
    </section>
  )
}

export default Loading
