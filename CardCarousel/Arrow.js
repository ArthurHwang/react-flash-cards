import React from 'react'

const Arrow = ({ direction, onClick }) => {
  const directional = `fas fa-arrow-alt-circle-${direction}`
  return (
    <div
      className={`slide-arrow ${direction}`}
      onClick={onClick}
    >
      <i className={directional} />
    </div>
  )
}

export default Arrow
