import React from 'react'

const Empty = (props) => {

  return (
    <div>
      <h1>You have no flash cards</h1>
      <button onClick={props.click}>Make one</button>
    </div>
  )
}

export default Empty
