import React from 'react'

const Arrow = ({ direction, onClick }) => {
  const directional = `text-primary fas fa-arrow-${direction}`
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
