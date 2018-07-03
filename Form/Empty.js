import React from 'react'

const Empty = (props) => {
  return (
    <div className="empty">
      <h1>You have no flash cards</h1>
      <button href="#new" id="make-one-button" onClick={props.click}>Make one</button>
    </div>
  )
}

export default Empty
