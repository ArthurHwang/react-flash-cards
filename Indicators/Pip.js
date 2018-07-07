import React from 'react'

const Pip = props => (
  <li>
    <a
      className={
          props.index === props.activeIndex
            ? "carousel-indicator carousel-indicator-active"
            : "carousel-indicator"}
    />
  </li>
)

export default Pip
