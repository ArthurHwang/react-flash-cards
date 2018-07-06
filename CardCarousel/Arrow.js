import React from 'react'

const Arrow = ({ direction, clickFunction}) => {
  let directional = `fas fa-arrow-alt-circle-${direction}`
  return (
    <div
      className={`slide-arrow ${direction}`}
      onClick={ clickFunction }>
      <i className={directional}></i>
    </div>
  )
}

export default Arrow
