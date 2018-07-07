import React from 'react'

const Arrow = ({ direction, clickFunction }) => {
  const directional = `fas fa-arrow-alt-circle-${direction}`
  return (
    <div
      className={`slide-arrow ${direction}`}
      onClick={clickFunction}
    >
      <i className={directional} />
    </div>
  )
}

export default Arrow
